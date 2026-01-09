"use client";

// library
import { ChangeEvent, useState } from "react";
import { SleepTime } from "@/constants/settings.constants";

export function useSleepTimeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [sleepTime, setSleepTime] = useState<SleepTime | null>(null);

  const open = () => {
    setSleepTime(null);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as SleepTime;
    setSleepTime(value);
  };

  return { isOpen, open, close, sleepTime, handleInputChange };
}
