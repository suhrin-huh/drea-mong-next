"use client";

// components
import ToggleButton from "@/components/common/ToggleButton";

// types
import { IsShared } from "@/types";

interface ShareToggleBoxProps {
  value: IsShared;
  onChange: (value: IsShared) => void;
}

/**
 * @component ShareToggleBox
 * @description 꿈 공유 유무를 선택
 */
export default function ShareToggleBox({ value, onChange }: ShareToggleBoxProps) {
  return (
    <div className="flex flex-row justify-between p-2">
      <p>꿈 공유하기</p>
      <ToggleButton name="isShared" checked={value} onChange={() => onChange(!value)} />
    </div>
  );
}
