"use client";

// library
import { ChangeEvent, FormEvent, useState } from "react";

// hook
import { useNicknameModal } from "@/hooks/useNicknameModal";
import { useSleepTimeModal } from "@/hooks/useSleepTimeModal";

// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import SettingsOption from "./_components/SettingsOption"; // TODO: SettingsOption 수정 필요!
import SleepTimeModal from "./_components/SleepTimeModal";
import NicknameModal from "./_components/NicknameModal";

export default function SettingsPage() {
  // 닉네임 변경 모달 관련
  const nicknameModal = useNicknameModal();
  const handleNicknameSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검증
    if (nicknameModal.validate()) return;

    try {
      // API 호출
      // updateNickname();
      alert("닉네임이 성공적으로 변경되었습니다.");
      nicknameModal.close();
    } catch {
      alert("닉네임 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 취침 시간 설정 관련
  const sleepTimeModal = useSleepTimeModal();
  const handleSleepTimeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // API 호출
      // updateSleepTime()
      alert(`취침 시간이 ${sleepTimeModal.sleepTime}분으로 설정되었습니다.`);
      sleepTimeModal.close();
    } catch {
      console.log("취침 시간 설정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleLogout = async () => {};

  return (
    <div className="flex h-full flex-col">
      <div className="text-bold flex h-[150px] items-center justify-center text-h3 font-bold text-white">
        <p>환경 설정</p>
      </div>
      <BottomSheetLayout>
        {/* settings 옵션 리스트 */}
        <SettingsOption label="닉네임 변경" onClick={nicknameModal.open} />
        <SettingsOption label="취침시간 설정하기" onClick={sleepTimeModal.open} />
        <SettingsOption label="로그아웃" onClick={handleLogout} />
        {/* 닉네임 변경 모달 */}
        <NicknameModal
          isOpen={nicknameModal.isOpen}
          nickname={nicknameModal.nickname}
          error={nicknameModal.error}
          onClose={nicknameModal.close}
          onInputChange={nicknameModal.handleInputChange}
          onSubmit={handleNicknameSubmit}
        />
        {/* 취침 시간 설정 모달 */}
        <SleepTimeModal
          isOpen={sleepTimeModal.isOpen}
          sleepTime={sleepTimeModal.sleepTime}
          onClose={sleepTimeModal.close}
          onInputChange={sleepTimeModal.handleInputChange}
          onSubmit={handleSleepTimeSubmit}
        />
      </BottomSheetLayout>
    </div>
  );
}
