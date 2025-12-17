export default function DreamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hide-scrollbar flex min-h-0 flex-1 flex-col gap-y-md overflow-y-scroll p-md text-white">
      {children}
    </div>
  );
}
