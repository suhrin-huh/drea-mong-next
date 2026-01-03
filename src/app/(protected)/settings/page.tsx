"use client";

// library
import { ChangeEvent, FormEvent, useState } from "react";

// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import SettingsOption from "./_components/SettingsOption"; // TODO: SettingsOption 수정 필요!
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";

export default function SettingsPage() {
  const [nicknameModalEnabled, setNicknameModalEnabled] = useState(false);
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");

  const openNicknameModal = () => {
    setNickname("");
    setNicknameError("");
    setNicknameModalEnabled(true);
  };

  const closeNicknameModal = () => {
    setNicknameModalEnabled(false);
  };
  const handleNicknameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    setNickname(value);

    if (value.length === 0) {
      setNicknameError("");
    } else if (value.length > 10) {
      setNicknameError("닉네임은 최대 10자까지 가능합니다.");
    } else {
      setNicknameError("");
    }
  };

  const handleNicknameChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname) {
      setNicknameError("닉네임을 입력해주세요.");
      return;
    }

    if (nickname.length > 10) {
      setNicknameError("닉네임은 최대 10자까지 가능합니다.");
      return;
    }

    setNicknameError("");

    try {
      // API 호출
      // updateNickname();
      alert("닉네임이 성공적으로 변경되었습니다.");
      closeNicknameModal();
    } catch {
      alert("닉네임 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleLogout = async () => {};

  // 취침 시간 설정 관련
  const [sleepTimeModalEnabled, setSleepTimeModalEnabled] = useState(false);
  const [sleepTime, setSleepTime] = useState("");

  const sleepTimeOptions = [
    { value: "10", label: "10분" },
    { value: "15", label: "15분" },
    { value: "30", label: "30분" },
    { value: "60", label: "1시간" },
  ];

  const openSleepTimeModal = () => {
    setSleepTime("");
    setSleepTimeModalEnabled(true);
  };

  const closeSleepTimeModal = () => {
    setSleepTime("");
    setSleepTimeModalEnabled(false);
  };

  const handleSleepTimeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSleepTime(e.target.value);
  };

  const handleSleepTimeChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!sleepTime) {
      return;
    }

    try {
      const minutes = parseInt(sleepTime);
      // 로직 추가
      alert("취침 시간이 설정되었습니다.");
      closeSleepTimeModal();
    } catch {
      alert("취침 시간 설정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="text-bold flex h-[150px] items-center justify-center text-h3 font-bold text-white">
        <p>환경 설정</p>
      </div>
      <BottomSheetLayout>
        {/* settings 옵션 리스트 */}
        <SettingsOption label="닉네임 변경" onClick={openNicknameModal} />
        <SettingsOption label="취침시간 설정하기" onClick={openSleepTimeModal} />
        <SettingsOption label="로그아웃" onClick={handleLogout} />
        {/* 닉네임 변경 모달 */}
        <Modal isOpen={nicknameModalEnabled} onClose={closeNicknameModal}>
          <form
            className="flex flex-col items-center justify-center gap-y-lg p-lg"
            onSubmit={handleNicknameChange}
          >
            <p className="text-[16px]">닉네임 변경하기</p>
            <input
              name="nickname"
              value={nickname}
              onChange={handleNicknameInputChange}
              placeholder="새로운 닉네임을 입력하세요."
              className="w-full rounded-lg border border-secondary p-md text-gray-900 transition-colors focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
            />
            <p className="text-danger">{nicknameError}</p>
            <div className="flex gap-x-md">
              <Button
                type="submit"
                variant="primary"
                rounded="md"
                size="md"
                disabled={!nickname.length}
              >
                변경하기
              </Button>
              <Button
                type="button"
                variant="outlined"
                rounded="md"
                size="md"
                onClick={closeNicknameModal}
              >
                닫기
              </Button>
            </div>
          </form>
        </Modal>
        {/* 취침 시간 설정 모달 */}
        <Modal isOpen={sleepTimeModalEnabled} onClose={closeSleepTimeModal}>
          <form
            className="flex flex-col items-center justify-center gap-y-lg p-lg"
            onSubmit={handleSleepTimeChange}
          >
            <p>취침 시간을 선택해주세요.</p>
            <p className="text-caption">설정된 시간이 지나면 HOME으로 이동합니다.</p>
            <div className="flex w-full flex-col gap-y-md p-md">
              {sleepTimeOptions.map((option) => (
                <label key={option.value} className="flex w-full items-center gap-x-md">
                  <input
                    type="radio"
                    name="sleepTime"
                    value={option.value}
                    checked={sleepTime === option.value}
                    onChange={handleSleepTimeInputChange}
                    className="h-5 w-5 cursor-pointer"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
            <div className="flex gap-x-md">
              <Button type="submit" variant="primary" rounded="md" size="md">
                설정하기
              </Button>
              <Button
                type="button"
                variant="outlined"
                rounded="md"
                size="md"
                onClick={closeSleepTimeModal}
              >
                닫기
              </Button>
            </div>
          </form>
        </Modal>
      </BottomSheetLayout>
    </div>
  );
}
