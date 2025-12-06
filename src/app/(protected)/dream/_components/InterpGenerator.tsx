'use client';

// library
import { useState } from "react";

// components
import Button from "@/components/common/Button";

/**
 * @component InterpGenerator
 * @description 해석을 생성하고, 모달창을 띄우는 기능
 */
export default function InterpGenerator() {
  const handleClick = () => {
    const form = document.querySelector("form")!;
    const formData = new FormData(form);
    const content = formData.get("content") as string;
    console.log(content)
  }
  return (
    <Button variant="primary" size="full" className="p-md" rounded="md" type="button" onClick={handleClick}>
      꿈 해석하기
    </Button>
  )
}