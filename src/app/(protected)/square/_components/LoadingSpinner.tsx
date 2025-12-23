"use client";

export default function LoadingSpinner() {
  return (
    <div className="flex h-[100px] flex-col items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}
