export default function SquareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={"flex h-full flex-col bg-black/30"}>{children}</div>;
}
