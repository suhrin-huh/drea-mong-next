"use client";

// components
import SquareItem from "./_components/SquareItem";

// mock
import { myDreamListMock } from "@/mocks/dream.mock";

export default function SquarePage() {
  return (
    <div className="hide-scrollbar px-lg pt-2xl gap-sm grid grid-cols-3 overflow-y-scroll">
      {myDreamListMock.map((dream) => (
        <SquareItem dream={dream} key={dream.dreamId} />
      ))}
    </div>
  );
}
