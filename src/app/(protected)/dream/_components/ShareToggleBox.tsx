"use client";

// components
import ToggleButton from "@/components/common/ToggleButton";

// types
import { IsShared, MyDreamDetail } from "@/types";

interface ShareToggleBoxProps {
  value: IsShared;
  onChange: (value: IsShared) => void;
  getFormData: () => MyDreamDetail;
}

// 근데 여기에서는 form에서 값을 어떻게 조절하지???
/**
 *
 * @returns
 */
export default function ShareToggleBox({ value, onChange, getFormData }: ShareToggleBoxProps) {
  return (
    <div className="flex flex-row justify-between p-2">
      <p>꿈 공유하기</p>
      <ToggleButton flag={value} />
    </div>
  );
}
