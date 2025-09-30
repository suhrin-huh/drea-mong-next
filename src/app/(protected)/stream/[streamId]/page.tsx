import Image from "next/image";
import HeaderBar from "@/components/bar/HeaderBar";
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";

export default function StreamDetailPage() {
  return (
    <>
      <div className="p-md space-y-md flex flex-col">
        <HeaderBar />
        <div className="relative h-[200px] w-full opacity-80">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="stream"
            fill
            className="rounded-lg"
          />
        </div>
        <div className="gap-x-sm flex w-full text-white">
          <p className="flex-1 truncate">
            이것은 음악방송 테스트입니다. 이것은 음악방송 테스트입니다.
          </p>
          <p>0명 시청중</p>
        </div>
      </div>
      <BottomSheetLayout isDarkMode={true} className="px-0 py-0">
        <div className="hide-scrollbar p-md flex-1 overflow-y-scroll">
          {Array.from({ length: 50 }).map((e, idx) => (
            <div
              key={idx}
              className={`text-white ${!((idx * 3) % 7 > 2) ? "text-right" : "text-left"}`}
            >
              <p className="font-semibold">별명</p>
              <p className="">채팅내용이 들어갈 곳입니다.</p>
            </div>
          ))}
        </div>
        <textarea className="rouded-lg" />
      </BottomSheetLayout>
    </>
  );
}

// TODO: 초기 설정은 내가 들어온 순간부터의 대화를 저장하는 것으로!
