import { cookies } from "next/headers";
import { redirect } from "next/navigation";
type AuthMode = "public" | "protected";

interface AuthGuardProps {
  mode: AuthMode;
  redirectTo?: string;
  children: React.ReactNode;
}

export default async function AuthGuard({ mode, redirectTo, children }: AuthGuardProps) {
  const cookieStore = await cookies();
  const token = cookieStore.get("refreshToken")?.value;
  console.log("authGuard에서 확인하는 쿠키", token);
  const isAuthenticated = !!token;

  if (mode === "protected" && !isAuthenticated) {
    redirect(redirectTo ?? "/login");
  } else if (mode === "public" && isAuthenticated) {
    redirect(redirectTo ?? "/");
  }
  return children;
}

// TODO: 인증 로직 어느 정도로 할지 좀 더 고민해보기!
