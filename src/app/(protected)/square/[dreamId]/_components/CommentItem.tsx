"use client";

// library
import { useState } from "react";

// components
import Button from "@/components/common/Button"; // ❌ 외부 Button 대신 네이티브 버튼 사용
import { IoMdMore, IoMdHeart, IoMdHeartEmpty } from "react-icons/io"; // ❌ react-icons 대신 인라인 SVG 사용

// types
import { SharedDreamComment } from "@/types";

// --- 인라인 SVG 아이콘 정의 ---

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

  const handleDelete = (commentId: number) => {

  }
  return (
    <div key={comment.commentId} className="relative flex gap-x-3 shrink-0">
      {/* <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        className="aspect-square h-10 rounded-full"
      /> */}
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
        onClick={toggleMenu}
      >
        <IoMdMore size={30} className="text-secondary" />
      </Button>
      {/* Action Sheet / Dropdown */}
      {activeMenu && (
        <div className="border-secondary absolute right-[40px] top-0 z-50 mt-2 w-40 rounded-lg border bg-white shadow-lg">
          <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-gray-100" onClick={() => 
            handleDelete(comment.commentId)}>
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