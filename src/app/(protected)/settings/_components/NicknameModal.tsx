"use client";

// library
import { ChangeEvent, FormEvent } from "react";

// component
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";

interface NicknameModalProps {
  isOpen: boolean;
  nickname: string;
  error: string;
  onClose: () => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function NicknameModal({
  isOpen,
  nickname,
  error,
  onClose,
  onInputChange,
  onSubmit,
}: NicknameModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form className="flex flex-col items-center justify-center gap-y-lg p-lg" onSubmit={onSubmit}>
        <p className="text-[16px]">닉네임 변경하기</p>
        <input
          name="nickname"
          value={nickname}
          onChange={onInputChange}
          placeholder="새로운 닉네임을 입력하세요."
          className="w-full rounded-lg border border-secondary p-md text-gray-900 transition-colors focus:border-primary focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
        />
        <p className="text-danger">{error}</p>
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
          <Button type="button" variant="outlined" rounded="md" size="md" onClick={onClose}>
            닫기
          </Button>
        </div>
      </form>
    </Modal>
  );
}
