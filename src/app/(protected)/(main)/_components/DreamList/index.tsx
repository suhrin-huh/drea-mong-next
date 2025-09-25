"use client";

// components
import DreamItem from "./DreamItem";

// types
import { Dream } from "@/types/dream";

interface DreamListProps {
  dreams: Dream[];
}

export default function DreamList({ dreams }: DreamListProps) {
  const handleClick = () => {};
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-scroll">
      {dreams.map((dream) => (
        <DreamItem key={dream.dreamId} dream={dream} handleClick={handleClick} />
      ))}
    </div>
  );
}
