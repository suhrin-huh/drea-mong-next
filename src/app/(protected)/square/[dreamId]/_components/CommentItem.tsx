"use client";

// library
import { useState } from "react";

// components
import Button from "@/components/common/Button";
import { IoMdMore, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

// types
import { SharedDreamComment } from "@/types";

interface CommentItemProps {
  comment: SharedDreamComment;
}

/**
 * @component CommentItem
 * @description 개별 댓글 아이템을 렌더링하며, 좋아요 및 메뉴 상태를 자체적으로 관리
 */
export default function CommentItem({ comment }: CommentItemProps) {
  const [isLiked, setIsLiked] = useState(comment.isLiked);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleLike = () => {
    // 실제 API 호출 로직이 들어갈 자리: likeComment(comment.commentId)
    setIsLiked((prev) => !prev);
  };

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  const handleDelete = (commentId: number) => {};
  return (
    <div key={comment.commentId} className="relative flex shrink-0 gap-x-3">
      {/* <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        className="aspect-square h-10 rounded-full"
      /> */}
      <div className="flex-1 space-y-sm">
        <p className="font-semibold">{comment.nickname}</p>
        <p className="flex-1">
          {comment.content} {comment.content}
        </p>
      </div>
      <button onClick={handleLike} className="h-fit pt-md">
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
        className="aspect-square h-10 p-1 hover:bg-primary/10"
        onClick={toggleMenu}
      >
        <IoMdMore size={30} className="text-secondary" />
      </Button>
      {/* Action Sheet / Dropdown */}
      {activeMenu && (
        <div className="absolute top-0 right-[40px] z-50 mt-2 w-40 rounded-lg border border-secondary bg-white shadow-lg">
          <button
            className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => handleDelete(comment.commentId)}
          >
            삭제
          </button>
          {/* <button className="w-full rounded-b-lg px-4 py-2 text-left hover:bg-gray-100">
            수정
          </button> */}
        </div>
      )}
    </div>
  );
}
