"use client";

// library
import { useRef, useState, ChangeEvent } from "react";

// types
import { WriteTime } from "@/types";

interface DatePickerProps {
  value: WriteTime;
  onChange: (value: WriteTime) => void;
}

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const dateInputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="mx-auto flex w-fit cursor-pointer flex-col justify-center rounded-lg border border-slate-200 px-4 py-2"
      onClick={() => dateInputRef.current?.showPicker()}
    >
      {/* 사용자들이 보게될 UI */}
      <input
        name="writeTime"
        type="date"
        className="h-0 opacity-0"
        ref={dateInputRef}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      />
      <p className="text-center">{value}</p>
    </div>
  );
}
