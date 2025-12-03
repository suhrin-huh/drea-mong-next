"use client";

// library
import { useState } from "react";

// constant
import { MIN_YEAR } from "@/constants/dream.constants";

export function useYearMonth() {
  const current = new Date();
  const [year, setYear] = useState(current.getFullYear());
  const [month, setMonth] = useState(current.getMonth() + 1);

  const handleYear = (number: number) => {
    setYear((prev) => Math.max(prev + number, MIN_YEAR));
  };

  const handleMonth = (number: number) => {
    setMonth(number);
  };

  return { year, month, handleYear, handleMonth };
}
