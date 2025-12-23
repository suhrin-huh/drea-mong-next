"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

// type
import { SharedDreamSummary } from "@/types";

// Link 컴포넌트가 가지는 기본 props들을 모두 포함하도록 확장합니다.
interface SharedDreamCardProps extends React.ComponentPropsWithoutRef<typeof Link> {
  dream: SharedDreamSummary;
}

// forwardRef를 사용하여 ref를 부모로부터 전달받습니다.
const SharedDreamCard = forwardRef<HTMLElement, SharedDreamCardProps>(
  ({ dream, className, ...props }, ref) => {
    return (
      <Link
        {...props} // 나머지 props(href 등)를 Link에 전달
        ref={ref as React.Ref<HTMLAnchorElement>} // 전달받은 ref를 Link(anchor 태그)에 연결
        // 기존 스타일과 외부에서 들어온 className을 합쳐줍니다. (tailwind-merge 사용 권장)
        className={`relative aspect-square w-full overflow-hidden ${className || ""}`}
      >
        <Image
          src={dream.image || "/default-image.png"} // 이미지가 없을 때의 대비책
          alt={`dream-image-${dream.dreamId}`}
          fill
          className="object-cover" // 이미지가 비율에 맞게 꽉 차도록 설정
        />
      </Link>
    );
  },
);

// 디버깅 시 컴포넌트 이름을 식별하기 위해 설정합니다.
SharedDreamCard.displayName = "SharedDreamCard";

export default SharedDreamCard;
