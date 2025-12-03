"use client";

// components
import DreamItem from "./DreamItem";

// types
import { MyDreamList } from "@/types/dream";

interface DreamListProps {
  dreamList: MyDreamList;
}

export default function DreamList({ dreamList }: DreamListProps) {
  const handleClick = () => {};
  return (
    <div className="hide-scrollbar flex min-h-0 flex-1 flex-col gap-1 overflow-y-scroll">
      {dreamList.map((dream) => (
        <DreamItem key={dream.dreamId} dream={dream} handleClick={handleClick} />
      ))}
    </div>
  );
}
