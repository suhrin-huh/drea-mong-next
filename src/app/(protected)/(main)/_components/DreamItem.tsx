// components
import Image from "next/image";

// types
import { MyDreamSummary } from "@/types";

// lib&util
import { formatDate } from "@/utils/formatter";

interface DreamItemProps {
  dream: MyDreamSummary;
  handleClick: () => void;
}

export default function DreamItem({ dream, handleClick }: DreamItemProps) {
  return (
    <div className="flex flex-row justify-center gap-x-2" onClick={handleClick}>
      {/* date */}
      <div className="flex h-full w-[70px] flex-col items-center justify-center">
        <p className="text-xl font-bold">{formatDate(dream.writeTime, "day")}</p>
        <p className="text-sm text-slate-500">{formatDate(dream.writeTime, "weekday")}</p>
      </div>
      {/* content */}
      <div className="relative flex h-[80px] flex-1 items-center p-2 text-white">
        <p className="z-2 line-clamp-2">{dream.content}</p>
        <div
          className={`absolute inset-0 z-1 rounded-lg bg-black ${dream.image ? "opacity-30" : "opacity-80"}`}
        ></div>
        {dream.image && (
          <Image src={dream.image} alt="꿈이미지" fill className="rounded-lg object-cover" />
        )}
      </div>
    </div>
  );
}
