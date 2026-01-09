"use client";

// library
import { ChangeEvent, FormEvent, useState } from "react";
import { SLEEP_OPTION_LIST, SleepTime } from "@/constants/settings.constants";

// component
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";

interface SleepTimeModalProps {
  isOpen: boolean;
  sleepTime: SleepTime | null;
  onClose: () => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function SleepTimeModal({
  isOpen,
  sleepTime,
  onClose,
  onInputChange,
  onSubmit,
}: SleepTimeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="flex flex-col items-center justify-center gap-y-lg p-lg" onSubmit={onSubmit}>
        <p>취침 시간을 선택해주세요.</p>
        <p className="text-caption">설정된 시간이 지나면 HOME으로 이동합니다.</p>
        <div className="flex w-full flex-col gap-y-md p-md">
          {SLEEP_OPTION_LIST.map((option) => (
            <label key={option.value} className="flex w-full items-center gap-x-md">
              <input
                type="radio"
                name="sleepTime"
                value={option.value}
                checked={sleepTime === option.value}
                onChange={onInputChange}
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
          <Button type="button" variant="outlined" rounded="md" size="md" onClick={onClose}>
            닫기
          </Button>
        </div>
      </form>
    </Modal>
  );
}
