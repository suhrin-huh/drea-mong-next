"use client";

// library
import { useState } from "react";

// components
import Button from "@/components/common/Button";

import { Interp, MyDreamDetail } from "@/types";

interface InterpGeneratorProps {
  value: Interp;
  onChange: (value: Interp) => void;
  getFormData: () => MyDreamDetail;
}

/**
 * @component InterpGenerator
 * @description 해석을 생성하고, 모달창을 띄우는 기능
 */
export default function InterpGenerator({ value, onChange, getFormData }: InterpGeneratorProps) {
  const handleInterpGenerate = () => {};

  return (
    <Button
      variant="primary"
      size="full"
      className="p-md"
      rounded="md"
      type="button"
      onClick={handleInterpGenerate}
    >
      꿈 해석하기
    </Button>
  );
}
