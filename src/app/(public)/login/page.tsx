// component
import AuthGuard from "@/components/auth/AuthGuard";
import OAuthList from "./_components/OAuthList";

export default function LoginPage() {
  return (
    <AuthGuard mode="public">
      <div className="flex h-full w-full flex-col p-2xl">
        <div className="flex flex-1 flex-col items-end justify-center gap-lg font-bold text-white">
          <h1 className="text-h1">DREA-MONG</h1>
          <div className="flex flex-col items-end justify-center gap-md">
            <p className="text-subtitle">꿈의 비밀을 통해</p>
            <p className="text-subtitle">자신을 발견해보세요.</p>
          </div>
        </div>
        <OAuthList />
      </div>
    </AuthGuard>
  );
}
