"use client";

// React 라이브러리
import { useRef, useEffect } from "react";

// Swiper 관련 라이브러리
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import { Swiper as SwiperClass } from 'swiper/types';
import type { SwiperRef } from "swiper/react";

interface DateSelectorProps {
  year: number;
  month: number;
  handleMonth: (month: number) => void;
  handleYear: (year: number) => void;
}

export default function DateSelector({ year, month, handleMonth, handleYear }: DateSelectorProps) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    // swiperRef의 Type이 swiperClass일 때에는 current?.slideTo인데 지금은 SwiperRef이므로
    swiperRef.current?.swiper.slideTo(month - 1, 0);
  }, [month]);

  return (
    <div className={"flex flex-col gap-4"}>
      {/* 년도 선택 */}
      <div className="flex items-center justify-center gap-12 text-xl">
        <button onClick={() => handleYear(-1)}>{"<"}</button>
        <p className="text-lg">{year}</p>
        <button onClick={() => handleYear(1)}>{">"}</button>
      </div>
      {/* 월 선택 */}
      <Swiper
        ref={swiperRef}
        slidesPerView={5.6}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        slideToClickedSlide={true}
        className="mySwiper w-full"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <SwiperSlide key={i} onClick={() => handleMonth(i + 1)} className="">
            <div
              className={`flex items-center justify-center rounded-lg py-3 ${month == i + 1 ? "bg-violet-500" : "border border-solid border-slate-200"}`}
            >
              <p className={`text-sm ${i + 1 == month ? "text-white" : "text-slate-600"}`}>
                {i + 1}월
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
