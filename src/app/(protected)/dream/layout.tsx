
export default function DreamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hide-scrollbar flex flex-col flex-1 min-h-0 gap-y-md overflow-y-scroll text-white p-md">
      {children}
    </div>
  )
}
