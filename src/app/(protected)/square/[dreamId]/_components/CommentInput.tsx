"use client";

import { useState } from "react";

import { IoMdCheckmark } from "react-icons/io";

interface CommentInputProps {
  onAddComment: (comment: string) => void;
}

// TODO: 컴포넌트마다 주석을 달면 좋을듯, 사용자 프로필이미지는 추후 적용
/**
 * @component CommentInput
 * @description 댓글 입력 및 전송 기능 담당
 */
export default function CommentInput({ onAddComment }: CommentInputProps) {
  const [commentText, setCommentText] = useState("");

  // 상위 컴포넌트에서 상태 변경하기 위해 props로 함수 전달
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = commentText.trim();
    if (!trimmedText) return;
    console.log("제출!!")
    onAddComment(trimmedText);
    setCommentText("");
  };

  return (
    <form onSubmit={(e) => {
      console.log("이벤트 발생")
      handleSubmit(e)
    }
    } className="flex h-fit items-center gap-x-3">
      {/* 사용자 이미지 */}
      {/* <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        className="aspect-square h-10 rounded-full"
      /> */}
      <input value={commentText}  onChange={(e) => setCommentText(e.target.value)} placeholder="댓글을 입력하세요." className="flex-1" />
      <button
        type="submit"
        disabled={!commentText.trim()}
        className="hover:bg-primary/10 aspect-square rounded-full p-3"
      >
        <IoMdCheckmark />
      </button>
    </form>
  );
}




/**
"use client";

import { Content } from "@/types";
import { useState, useRef } from "react";

import { IoMdCheckmark } from "react-icons/io";

interface CommentInputProps {
  onAddComment: (content: Content) => void;
}

// TODO: 이거 상태 사용버전, Ref 사용 버전 두개로 구현해보자.

export default function CommentInput({ onAddComment }: CommentInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const value = inputRef.current?.value.trim();
    if (!value) return;

    onAddComment(value);
    if (inputRef.current) inputRef.current.value = ""; 
  };

  return (
    <form onSubmit={(e) => {
      console.log("이벤트 발생")
      handleSubmit(e)
    }
    } className="flex h-fit items-center gap-x-3">
      <input
        ref={inputRef}
        placeholder="댓글을 입력하세요."
        className="flex-1"
      />
      <button
        type="submit"
        // disabled={!commentText.trim()}
        className="hover:bg-primary/10 aspect-square rounded-full p-3"
      >
        <IoMdCheckmark />
      </button>
    </form>
  );
}

 */