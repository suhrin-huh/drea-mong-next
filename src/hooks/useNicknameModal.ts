"use client";

// library
import { ChangeEvent, FormEvent, useState } from "react";

export function useNicknameModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState("");

  const open = () => {
    setNickname("");
    setError("");
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    setNickname(value);

    if (value.length === 0) {
      setError("");
    } else if (value.length > 10) {
      setError("닉네임은 최대 10자까지 가능합니다.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nickname) {
      setError("닉네임을 입력해주세요.");
      return;
    }

    if (nickname.length > 10) {
      setError("닉네임은 최대 10자까지 가능합니다.");
      return;
    }

    setError("");

    try {
      // API 호출
      // updateNickname();
      alert("닉네임이 성공적으로 변경되었습니다.");
      close();
    } catch {
      alert("닉네임 변경에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return { isOpen, open, close, error, nickname, handleInputChange, handleSubmit };
}
