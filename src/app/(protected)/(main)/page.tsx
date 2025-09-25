"use client";

// library
import { useState } from "react";

// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import UserGreeting from "./_components/UserGreeting";
import DateSelector from "./_components/DateSelector";
import DreamList from "./_components/DreamList";

// constant
import { MIN_YEAR } from "@/constants/dream.constants";

// type
import { Dream } from "@/types/dream";

// mock
import { myDreamListMock } from "@/mocks/dream.mock";

export default function MainPage() {
  const current = new Date();
  const [dreams, setDreams] = useState<Dream[]>(myDreamListMock);
  const [year, setYear] = useState(current.getFullYear());
  const [month, setMonth] = useState(current.getMonth() + 1);

  const handleYear = (number: number) => {
    setYear((prev) => Math.max(prev + number, MIN_YEAR));
  };

  const handleMonth = async (number: number) => {
    setMonth(number);
  };

  return (
    <>
      <UserGreeting />
      <BottomSheetLayout>
        <DateSelector year={year} month={month} handleMonth={handleMonth} handleYear={handleYear} />
        <DreamList dreams={dreams} />
      </BottomSheetLayout>
    </>
  );
}
