"use client";

// type
import { HTMLAttributes, ReactNode } from "react";

interface BottomSheetLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isDarkMode?: boolean;
}

export default function BottomSheetLayout({
  children,
  className,
  isDarkMode = false,
  ...rest
}: BottomSheetLayoutProps) {
  return (
    <div
      className={`p-lg gap-md flex min-h-0 flex-1 flex-col rounded-t-xl ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white"
      } ${className ?? ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}

// TODO: type 정의 이후에 다시 고민해보기
