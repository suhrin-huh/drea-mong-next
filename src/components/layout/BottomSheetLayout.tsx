type BottomSheetLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function BottomSheetLayout({ children }: BottomSheetLayoutProps) {
  return (
    <div className={"p-lg gap-md flex min-h-0 flex-1 flex-col rounded-t-xl bg-white"}>
      {children}
    </div>
  );
}
