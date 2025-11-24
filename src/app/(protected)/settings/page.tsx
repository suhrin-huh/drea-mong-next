"use client";

// library
import { useState } from "react";

// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import SettingsOption from "./_components/SettingsOption";
import ToggleButton from "@/components/common/ToggleButton";
import httpClient from "@/lib/api/httpClient";
import { endpoints } from "@/lib/api/endpoints";

export default function SettingsPage() {
  const [pushEnabled, setPushEnabled] = useState(false);

  const handlePushEnabled = () => {
    setPushEnabled((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await httpClient.post(endpoints.auth.logout);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="text-bold text-h3 flex h-[150px] items-center justify-center font-bold text-white">
        <p>환경 설정</p>
      </div>
      <BottomSheetLayout>
        <SettingsOption label="닉네임 변경" handleClick={() => {}} />
        <SettingsOption
          label="푸시 알림 활성화"
          icon={<ToggleButton flag={pushEnabled} />}
          handleClick={handlePushEnabled}
        />
        <SettingsOption label="취침시간 설정하기" handleClick={() => {}} />
        <SettingsOption label="로그아웃" handleClick={handleLogout} />
      </BottomSheetLayout>
    </div>
  );
}
