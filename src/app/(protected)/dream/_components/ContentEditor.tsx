"use client";

// library
import { useState } from "react";

// constants
import { MAX_LENGTH, MIN_LENGTH, MIN_YEAR } from "@/constants/dream.constants";

// types
import { TextareaHTMLAttributes } from "react";

interface ContentEditorProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  validate?: (value: string) => string | null;
}

export default function ContentEditor({ ...props }: ContentEditorProps) {
  const [content, setContent] = useState("");
  return (
    <div className="relative h-[150px] rounded-md bg-slate-800/20">
      <textarea
        {...props}
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={`h-full w-full resize-none p-3 placeholder:text-slate-200`}
        placeholder="꿈 내용을 입력해주세요."
      />
      <p className="absolute bottom-5 right-2 text-slate-500">
        {content.length}/{MAX_LENGTH}
      </p>
    </div>
  );
}
