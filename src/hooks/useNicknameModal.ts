"use client";

// library
import { ChangeEvent, useState } from "react";

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

  const validate = (): boolean => {
    if (!nickname) {
      setError("닉네임을 입력해주세요.");
      return false;
    }

    if (nickname.length > 10) {
      setError("닉네임은 최대 10자까지 가능합니다.");
      return false;
    }

    setError("");
    return true;
  };

  return { isOpen, open, close, error, nickname, handleInputChange, validate };
}
