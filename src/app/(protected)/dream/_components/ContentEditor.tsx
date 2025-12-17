"use client";

// library
import { useState } from "react";

// constants
import { MAX_LENGTH, MIN_LENGTH, MIN_YEAR } from "@/constants/dream.constants";

// types
import { TextareaHTMLAttributes, ChangeEvent } from "react";
import { Content, MyDreamDetail } from "@/types";

interface ContentEditorProps {
  value: Content;
  onChange: (value: Content) => void;
}

export default function ContentEditor({ value, onChange }: ContentEditorProps) {
  return (
    <div className="relative h-[150px] rounded-md bg-slate-800/20">
      <textarea
        name="content"
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        className={`h-full w-full resize-none p-3 placeholder:text-slate-200`}
        placeholder="꿈 내용을 입력해주세요."
      />
      <p className="absolute right-2 bottom-5 text-slate-500">
        {value.length}/{MAX_LENGTH}
      </p>
    </div>
  );
}
