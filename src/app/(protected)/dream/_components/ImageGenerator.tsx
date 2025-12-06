'use client';

// library
import { useState } from "react";
import Image from "next/image";
// components
import Button from "@/components/common/Button";

/**
 * @component ImageGenerator
 * @description 이미지 생성 및 조회하는 기능
 */
export default function ImageGenerator() {
  return (
    <Button
      variant="primary"
      size="full"
      rounded="md"
      type="button"
      onClick={() => {}}
      className="p-md gap-y-md flex h-[200px] shrink-0 flex-col items-center justify-center rounded rounded-md"
      >
      <Image src={"/palette.png"} alt="이미지 생성 아이콘" width={80} height={80} />
      <p>꿈 이미지 생성하기</p>
    </Button>
  )
}