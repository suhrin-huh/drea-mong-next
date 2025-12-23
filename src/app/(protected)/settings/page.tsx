"use client";

// library
import { useState } from "react";

// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import SettingsOption from "./_components/SettingsOption"; // TODO: SettingsOption 수정 필요!
import ToggleButton from "@/components/common/ToggleButton";

export default function SettingsPage() {
  const [pushEnabled, setPushEnabled] = useState(false);

  const handlePushEnabled = () => {
    setPushEnabled((prev) => !prev);
  };

  const handleLogout = async () => {};

  return (
    <div className="flex h-full flex-col">
      <div className="text-bold flex h-[150px] items-center justify-center text-h3 font-bold text-white">
        <p>환경 설정</p>
      </div>
      <BottomSheetLayout>
        <SettingsOption label="닉네임 변경" handleClick={() => {}} />
        <SettingsOption
          label="푸시 알림 활성화"
          icon={<ToggleButton checked={pushEnabled} onChange={() => {}} />}
          handleClick={handlePushEnabled}
        />
        <SettingsOption label="취침시간 설정하기" handleClick={() => {}} />
        <SettingsOption label="로그아웃" handleClick={handleLogout} />
      </BottomSheetLayout>
    </div>
  );
}
