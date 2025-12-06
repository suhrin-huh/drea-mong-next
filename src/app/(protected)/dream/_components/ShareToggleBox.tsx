'use client';

// components
import ToggleButton from "@/components/common/ToggleButton";

export default function ShareToggleBox() {
  return (
    <div className="flex flex-row justify-between p-2">
      <p>꿈 공유하기</p>
      <ToggleButton name="isShared" initialValue={false} />
    </div>
  )
}