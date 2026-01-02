"use client";

// library
import { useState } from "react";

// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import SettingsOption from "./_components/SettingsOption"; // TODO: SettingsOption 수정 필요!
import ToggleButton from "@/components/common/ToggleButton";
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";

export default function SettingsPage() {
  const [pushEnabled, setPushEnabled] = useState(false);

  const handlePushEnabled = () => {
    setPushEnabled((prev) => !prev);
  };

  const [modalEnabled, setModalEnabled] = useState(false);

  const openModal = () => {
    setModalEnabled(true);
  };

  const closeModal = () => {
    setModalEnabled(false);
  };

  const handleLogout = async () => {};

  return (
    <div className="flex h-full flex-col">
      <div className="text-bold flex h-[150px] items-center justify-center text-h3 font-bold text-white">
        <p>환경 설정</p>
      </div>
      <BottomSheetLayout>
        {/* settings 옵션 리스트 */}
        <SettingsOption label="닉네임 변경" onClick={openModal} />
        <SettingsOption
          label="푸시 알림 활성화"
          icon={<ToggleButton checked={pushEnabled} onChange={() => {}} />}
          onClick={handlePushEnabled}
        />
        <SettingsOption label="취침시간 설정하기" onClick={openModal} />
        <SettingsOption label="로그아웃" onClick={handleLogout} />
        {/* 모달 */}
        <Modal isOpen={modalEnabled} onClose={closeModal}>
          <form>
            <input placeholder="입력하세요." />
          </form>
          <Button variant="none" rounded="md" size="md" onClick={closeModal}>
            닫기
          </Button>
        </Modal>
      </BottomSheetLayout>
    </div>
  );
}
