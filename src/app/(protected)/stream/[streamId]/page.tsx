import Image from "next/image";
import HeaderBar from "@/components/bar/HeaderBar";
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";

export default function StreamDetailPage() {
  return (
    <div className="py-sm flex h-full flex-col bg-black text-white">
      {/* 상단 헤더 */}
      <HeaderBar />
      {/* 영상 영역 */}
      <div className="relative aspect-video w-full bg-black">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="stream"
          fill
          className="object-cover opacity-90"
        />
        {/* Live Badge */}
        <div className="py-sm px-md absolute left-2 top-2 rounded-md bg-red-600 text-[12px] text-white">
          ● LIVE
        </div>
        {/* 시청자 수 */}
        <div className="py-sm px-md absolute right-2 top-2 rounded-md bg-black/60 text-[12px] text-white">
          0명 시청중
        </div>
      </div>
      {/* 영상 제목 및 정보 */}
      <div className="px-md py-sm space-y-[4px]">
        <h1 className="line-clamp-2 text-[16px] font-semibold">
          이것은 음악방송 테스트입니다. 이것은 음악방송 테스트입니다.
        </h1>

        <div className="mt-[6px] flex items-center gap-x-[10px]">
          {/* 스트리머 프로필 */}
          <div className="h-[36px] w-[36px] overflow-hidden rounded-full bg-gray-700">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="profile"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>

          {/* 스트리머 정보 */}
          <div className="flex flex-col text-[13px]">
            <span className="font-medium">음악방송 채널</span>
            <span className="text-gray-400">구독자 12.3만명</span>
          </div>

          <button className="ml-auto rounded-full bg-white px-[12px] py-[6px] text-[13px] text-black">
            구독
          </button>
        </div>
      </div>
      {/* ▼ 라이브 채팅 영역 (BottomSheetLayout 활용) */}
      <BottomSheetLayout isDarkMode={true} className="flex flex-1 px-0 py-0">
        <div className="flex h-full flex-col">
          {/* 채팅 메시지 리스트 */}
          <div className="hide-scrollbar px-md py-md space-y-md border-1 flex-1 overflow-y-scroll border-t border-white/30">
            {Array.from({ length: 60 }).map((_, idx) => (
              <div key={idx} className={`${(idx * 3) % 7 > 2 ? "text-right" : "text-left"}`}>
                <p className="text-[13px] font-semibold">별명</p>
                <p className="text-[14px]">채팅내용이 들어갈 곳입니다.</p>
              </div>
            ))}
          </div>
          {/* 채팅 입력창 */}
          <div className="p-md border-1 border-t border-white/30">
            <div className="flex items-center gap-x-[10px]">
              <textarea
                placeholder="메시지 입력..."
                className="h-[40px] flex-1 resize-none rounded-lg px-[12px] py-[10px] text-[14px] leading-[1.2] text-white placeholder-gray-400"
              />
              <button className="text-primary text-[14px] font-semibold">보내기</button>
            </div>
          </div>
        </div>
      </BottomSheetLayout>
    </div>
  );
}

// TODO: 초기 설정은 내가 들어온 순간부터의 대화를 저장하는 것으로!
