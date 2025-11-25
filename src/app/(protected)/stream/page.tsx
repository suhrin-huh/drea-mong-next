// component
import Image from "next/image";
import Link from "next/link";

export default function StreamPage() {
  return (
    <div className="hide-scrollbar flex flex-1 flex-col gap-y-[20px] overflow-y-scroll py-[20px]">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Link href={`/stream/${idx}`} key={idx} className="block w-full">
          {/* 썸네일 */}
          <div className="relative h-[200px] w-full overflow-hidden bg-[#111]">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="stream"
              fill
              className="object-cover"
            />

            {/* 시청자 수 배지 */}
            <span className="p-md absolute bottom-2 right-2 rounded-md bg-black/70 text-[12px] text-white">
              🔴 3명 시청중
            </span>
          </div>

          {/* 영상 정보 영역 */}
          <div className="flex items-start gap-x-[10px] px-[4px] pt-[8px]">
            {/* 방송 제목 + 스트리머 */}
            <div className="flex w-full flex-col overflow-hidden">
              <p className="truncate text-[15px] font-medium text-white">
                다음은 stream 페이지 테스트를 위한 제목입니다.
              </p>
              <p className="mt-[2px] truncate text-[13px] text-gray-400">방송하는 사람 이름</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
