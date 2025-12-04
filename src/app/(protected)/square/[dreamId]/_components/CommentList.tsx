"use client";

// components
import CommentItem from "./CommentItem";

// types
import { SharedDreamComment } from "@/types";
interface CommentListProps {
  commentList: SharedDreamComment[];
}

/**
 * @component CommentList
 * @description 댓글 목록 전체를 렌더링합니다.
 */
export default function CommentList({ commentList }: CommentListProps) {
  if (!commentList || commentList.length === 0) {
    return (
      <p className="flex-1 flex flex-col justify-center itmes-center text-center text-gray-500">아직 댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
    );
  }
  return (
    <div className="hide-scrollbar flex flex-col flex-1 min-h-0 gap-y-md overflow-y-scroll">
      {commentList.map((comment) => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}
    </div>
  )
}
