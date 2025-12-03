"use client";

// library
import { useState } from "react";

// component
import DateSelector from "./DateSelector";
import DreamList from "./DreamList";

// hooks
import { useYearMonth } from "@/hooks/useYearMonth";

// type
import { MyDreamList } from "@/types/dream";

interface MainClientComponentProps {
  initialDreamList: MyDreamList;
}

export default function MainClientComponent({ initialDreamList }: MainClientComponentProps) {
  console.log(initialDreamList);
  const { year, month, handleYear, handleMonth } = useYearMonth();
  const [dreamList, setDreamList] = useState(initialDreamList);

  return (
    <>
      <DateSelector year={year} month={month} handleMonth={handleMonth} handleYear={handleYear} />
      <DreamList dreamList={dreamList} />
    </>
  );
}
