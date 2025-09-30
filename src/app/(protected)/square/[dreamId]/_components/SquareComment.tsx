"use client";

// library
import { useState } from "react";

// components
import Button from "@/components/common/Button";
import { IoMdCheckmark, IoMdMore, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

// types
import { Comment } from "@/types/comment";

interface SquareCommentProps {
  comments: Comment[];
}

export default function SquareComment({ comments }: SquareCommentProps) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const toggleMenu = (id: number) => {
    setActiveMenu((prev) => (prev == id ? null : id));
  };

  return (
    <>
      <div className="flex h-fit gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="aspect-square h-10 rounded-full"
        />
        <input placeholder="댓글을 입력하세요." className="flex-1" />
        <button className="hover:bg-primary/10 aspect-square rounded-full p-3">
          <IoMdCheckmark />
        </button>
      </div>
      <hr className="text-secondary" />
      <div className="gap-y-md hide-scrollbar flex min-h-0 flex-1 flex-col overflow-y-scroll">
        {comments.map((comment, idx) => (
          <div key={comment.commentId} className="relative flex gap-x-3">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              className="aspect-square h-10 rounded-full"
            />
            <div className="space-y-sm flex-1">
              <p className="font-semibold">{comment.nickname}</p>
              <p className="flex-1">
                {comment.content} {comment.content}
              </p>
            </div>
            <button onClick={handleLike} className="pt-md h-fit">
              {isLiked ? (
                <IoMdHeart size={20} className="text-red-700/80" />
              ) : (
                <IoMdHeartEmpty size={20} className="text-secondary" />
              )}
            </button>
            <Button
              size="none"
              variant="none"
              rounded="full"
              className="hover:bg-primary/10 aspect-square h-10 p-1"
              onClick={() => toggleMenu(comment.commentId)}
            >
              <IoMdMore size={30} className="text-secondary" />
            </Button>
            {/* Action Sheet / Dropdown */}
            {activeMenu === comment.commentId && (
              <div className="border-secondary absolute right-[40px] top-0 z-50 mt-2 w-40 rounded-lg border bg-white shadow-lg">
                <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100">
                  삭제
                </button>
                {/* <button className="w-full rounded-b-lg px-4 py-2 text-left hover:bg-gray-100">
                  수정
                </button> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
