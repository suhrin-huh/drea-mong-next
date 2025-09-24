"use client";

import Image from "next/image";

type Dream = {
  dreamId: number;
  writeTime: string;
  image: string;
  content: string;
};

interface DreamListProps {
  dreams: Dream[];
  handleClick: (dreamId: number) => void;
}

type DateFormatType = "day" | "weekday";

export default function DreamList({ dreams, handleClick }: DreamListProps) {
  function formatDate(dateStr: string, format: DateFormatType): string {
    const date = new Date(dateStr);

    switch (format) {
      case "day":
        return date.toLocaleDateString("en-US", { day: "2-digit" });

      case "weekday":
        return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll">
      {dreams.map((dream) => (
        <div
          key={dream.dreamId}
          className="flex h-[100px] flex-row gap-x-1 p-3"
          onClick={() => handleClick(dream.dreamId)}
        >
          {/* date */}
          <div className="flex w-[70px] flex-col items-center justify-center">
            <p className="text-xl font-bold">{formatDate(dream.writeTime, "day")}</p>
            <p className="text-sm text-slate-500">{formatDate(dream.writeTime, "weekday")}</p>
          </div>
          {/* content */}
          <div className={`relative flex-1 overflow-hidden rounded-lg text-white`}>
            <div className="bg-primary-500 relative z-10 rounded-lg bg-opacity-70 p-3 p-4">
              <p className="h-full truncate whitespace-pre-wrap break-words">{dream.content}</p>
            </div>
            {dream.image && (
              <>
                <div className="z-1 absolute inset-0 bg-black opacity-30" />
                <Image src={dream.image} alt="꿈이미지" fill className="z-0 object-cover" />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
