"use client";

// library
import { useState, useRef } from "react";

// constants
import { MAX_LENGTH, MIN_LENGTH, MIN_YEAR } from "@/constants/dream.constants";

// components
import ToggleButton from "@/components/common/ToggleButton";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function DreamNew() {
  const [content, setContent] = useState("");
  const contentRef = useRef(null);
  const [isShared, setIsShared] = useState(false);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-y-3 overflow-y-scroll p-4 text-white">
      {/* UpperBar */}
      <div className="flex justify-between">
        {/* < 모양 아이콘 */}
        <button onClick={() => {}}>
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 13L1.5 7L7.5 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* */}
        <button className="text-base" onClick={() => {}}>
          삭제
        </button>
      </div>
      {/* 스크롤이 생기도록 변경해야한다. */}
      <div></div>
      {/* DatePicker */}
      <div className="flex justify-center">
        <div className="inline-block rounded-lg border border-slate-100 p-2">
          <input
            // value={date}
            type="date"
            // onChange={(e) => handleDate(e)}
            className="text-center text-base"
          />
        </div>
      </div>
      {/* ContentBox */}
      <div className="relative h-[150px] rounded-md bg-slate-800 opacity-20">
        <textarea
          // ref={contentRef}
          className={`h-full w-full resize-none p-3 placeholder:text-slate-200`}
          // value={content}
          // onChange={(e) => {
          // handleContent(e);
          // }}
          placeholder="꿈 내용을 입력해주세요."
        ></textarea>
        <p className="absolute bottom-5 right-2 text-slate-500">
          {content.length}/{MAX_LENGTH}
        </p>
      </div>
      {/* Interpretation */}
      <Button variant="primary" size="full" className="p-md">
        꿈 해석하기
      </Button>
      {/* ImageGenerator */}
      <button
        onClick={() => {
          console.log(123);
        }}
        // className="appearance-none bg-none bg-primary-500 flex flex-col items-center border border-white rounded-lg "
        className="bg-primary hover:bg-primary-hover gap-y-md flex h-[200px] shrink-0 flex-col items-center justify-center rounded rounded-md transition"
      >
        {/* <img className="inline-block w-20 h-20" src={imgGenerator} alt="이미지 생성하기"/> */}
        <Image src={"/img_generator.png"} alt="이미지 생성 아이콘" width={80} height={80} />
        <p>꿈 이미지 생성하기</p>
      </button>
      {/* ShareSettings */}
      <div className="flex flex-row justify-between p-2">
        <div>꿈 공유하기</div>
        <ToggleButton flag={isShared} handleFlag={() => setIsShared((prev) => !prev)} />
      </div>
      {/* SaveButton + self-center의 역할이 뭘까?*/}
      <Button variant="primary" size="md" className="p-md mx-auto">
        저장하기
      </Button>
    </div>
  );
}
