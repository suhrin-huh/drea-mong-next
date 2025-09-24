import Navbar from "@/components/common/Navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex h-full w-full flex-col"}>
      {/* main*/}
      <div className={`flex min-h-0 flex-1 flex-col`}>{children}</div>
      {/* Navbar */}
      <Navbar />
    </div>
  );
}
