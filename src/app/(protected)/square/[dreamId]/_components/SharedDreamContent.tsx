"use client";

// library
import { useState } from "react";

// components
import Image from "next/image";
import Button from "@/components/common/Button";

// types
import { SharedDreamDetail } from "@/types";

interface SharedDreamContentProps {
  dream: SharedDreamDetail;
}

export default function SharedDreamContent({ dream }: SharedDreamContentProps) {
  const [isInterpShown, setIsInterpShown] = useState(false);
  const handleClick = () => {
    setIsInterpShown((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-y-md">
      <Image
        // TODO: 이 부분 해결 필요하다!
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="꿈 이미지"
        width={200}
        height={200}
        className="aspect-square rounded-lg"
      />
      {isInterpShown ? (
        <div className="flex w-full flex-col gap-y-sm rounded-lg bg-secondary/50 p-md">
          <p className="text-center">꿈 내용</p>
          <p className="hide-scroller max-h-[100px] overflow-y-scroll break-all">{dream.content}</p>
          <hr className="border-secondary" />
          <p className="text-center">해몽</p>
          <p className="hide-scroller max-h-[100px] overflow-y-scroll break-all">{dream.interp}</p>
          <button className="text-secondary" onClick={handleClick}>
            닫기
          </button>
        </div>
      ) : (
        <Button size="full" variant="primary" rounded="md" onClick={handleClick}>
          <p className="p-md text-body-md">💡 어떤 꿈인지 궁금하다면 클릭해보세요!</p>
        </Button>
      )}
    </div>
  );
}
