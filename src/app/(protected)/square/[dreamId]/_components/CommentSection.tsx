"use client";

// library
import { useState } from "react";

// components
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

// types
import { SharedDreamComment } from "@/types";

interface CommentSectionProps {
  // 초기 데이터를 Props로 받습니다.
  initialCommentList: SharedDreamComment[];
}

/**
 * @component CommentSection
 * @description 공유된 꿈 상세 페이지의 댓글 영역 컨테이너입니다.
 * 댓글 목록 상태를 관리하며, 댓글 입력 시 즉시 목록에 반영합니다.
 */
export default function CommentSection({ initialCommentList }: CommentSectionProps) {
  // 1. 댓글 목록 상태 관리
  // 초기 데이터를 사용하여 상태를 설정합니다.
  const [comments, setComments] = useState(initialCommentList);

  const handleAddComment = (newContent: string) => {
    const newComment: SharedDreamComment = {
      commentId: new Date().getSeconds(), // 임시 ID
      nickname: "나의 닉네임", // 임시 닉네임
      content: newContent,
      isLiked: false,
      likeCount: 0,
      isOwner: true,
    };

    console.log("새 댓글 전송 (API 호출 필요):", newContent);
    // 로직 연결 전이기 때문에 우선은 상태를 업데이트하여 목록 맨 아래에 새 댓글 추가
    setComments((prevComments) => [ newComment, ...prevComments]);

  };

  const handleDeleteComment = () => {}
  return (
    <>
      {/* 1. 댓글 목록 영역 (스크롤 가능) - 상태를 전달 */}
      <CommentList commentList={comments} />
      {/* 2. 댓글 입력창 영역 - 댓글 추가 함수를 Props로 전달 */}
      <hr className="text-secondary" />
      <CommentInput onAddComment={handleAddComment} />
    </>
  );
}
