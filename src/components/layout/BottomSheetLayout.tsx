type BottomSheetLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function BottomSheetLayout({ children }: BottomSheetLayoutProps) {
  return (
    <div className={"flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto rounded-t-xl bg-white p-4"}>
      {children}
    </div>
  );
}
