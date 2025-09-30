// component
import Image from "next/image";
import Link from "next/link";

export default function StreamPage() {
  return (
    <div className="hide-scrollbar space-y-md p-lg mt-[30px] flex-1 overflow-y-scroll">
      {Array.from({ length: 10 }).map((e, idx) => (
        <Link
          href={`/stream/${idx}`}
          key={idx}
          className="p-md space-y-sm block h-[250px] w-full rounded-lg bg-black"
        >
          <div className="relative h-[200px] w-full opacity-80">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="stream"
              fill
              className="rounded-lg"
            />
          </div>
          <div className="gap-x-lg flex w-full text-white">
            <p className="flex-1 truncate">다음은 stream 페이지 테스트를 위한 제목입니다.</p>
            <p>0명 시청중</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
