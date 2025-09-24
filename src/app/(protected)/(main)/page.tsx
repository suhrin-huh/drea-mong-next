"use client";

// library
import { useState } from "react";

// components
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import UserGreeting from "./_components/UserGreeting";
import DateSelector from "./_components/DateSelector";
import DreamList from "./_components/DreamList";

// constants
type Dreams = {
  dreamId: number;
  writeTime: string;
  image: string;
  content: string;
}[];

// mock
import { MydreamListMock } from "@/mocks/dream.mock";
import { MIN_YEAR } from "@/constants/dream.constants";

export default function MainPage() {
  const current = new Date();
  const [dreams, setDreams] = useState<Dreams>(MydreamListMock);
  const [year, setYear] = useState(current.getFullYear());
  const [month, setMonth] = useState(current.getMonth() + 1);

  const handleYear = (number: number) => {
    setYear((prev) => Math.max(prev + number, MIN_YEAR));
  };

  const handleMonth = async (number: number) => {
    setMonth(number);
  };

  const handleClick = () => {};

  return (
    <>
      <UserGreeting />
      <BottomSheetLayout>
        <DateSelector year={year} month={month} handleMonth={handleMonth} handleYear={handleYear} />
        <DreamList dreams={dreams} handleClick={handleClick} />
      </BottomSheetLayout>
    </>
  );
}
