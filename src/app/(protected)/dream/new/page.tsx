"use client";

// library
import { useState, useRef } from "react";

// constants
import { FormEvent } from "react";

// components
import Button from "@/components/common/Button";
import HeaderBar from "@/components/bar/HeaderBar";
import DatePicker from "../_components/DatePicker";
import ContentEditor from "../_components/ContentEditor";
import InterpGenerator from "../_components/InterpGenerator";
import ShareToggleBox from "../_components/ShareToggleBox";
import ImageGenerator from "../_components/ImageGenerator";

/**
 * @component CommentList
 * @description 댓글 목록 전체를 렌더링합니다.
 */
export default function DreamNew() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData);
    // console.log(data)
  };

  return (
    <>
      <HeaderBar />
      <form onSubmit={(e) => handleSubmit(e)} className="gap-y-md flex flex-col">
        <DatePicker initialDate={new Date()} />
        <ContentEditor />
        <InterpGenerator />
        <ImageGenerator />
        <ShareToggleBox />
        <Button variant="primary" size="md" className="p-md mx-auto" rounded="md" type="submit">
          저장하기
        </Button>
      </form>
    </>
  );
}
