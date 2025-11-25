export default function DreamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"h-full flex flex-col p-lg"}>
      {children}
    </div>
  );
}
