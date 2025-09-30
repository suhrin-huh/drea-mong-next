// component
import NavBar from "@/components/bar/NavBar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* main */}
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      {/* Navbar */}
      <NavBar />
    </>
  );
}

// TODO: flex-1은 직속 부모가 flex일 때 정상 동작한다. (+ min-h-0)
