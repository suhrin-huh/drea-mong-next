"use client";

// library
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Chart.js 4.5.1 플러그인 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// React 라이브러리
import { useRef, useEffect, useState } from "react";

// Swiper 관련 라이브러리
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// import { Swiper as SwiperClass } from 'swiper/types';
import type { SwiperRef } from "swiper/react";

function KeywordStatistic() {
  return (
    <div className="rounded-[16px] bg-white px-[16px] py-[20px] shadow-sm">
      <p className="mb-[16px] text-center text-[16px] text-[#1A1A1A]">이번달의 주요 키워드</p>
      <div className="flex flex-wrap justify-center gap-[12px]">
        {["키워드1", "키워드2", "키워드3", "키워드4", "키워드5", "키워드6"].map((v) => (
          <span
            key={v}
            className="rounded-[12px] bg-[#E8ECFF] px-[12px] py-[8px] text-[13px] text-[#3B5BDB]"
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

function PeopleStatistic() {
  return (
    <div className="rounded-[16px] bg-white px-[16px] py-[20px] text-black shadow-sm">
      <p className="mb-[12px] text-center text-[15px]">누가 자주 나왔을까요?</p>
      <div className="flex flex-wrap justify-center gap-[12px]">
        {["키워드1", "키워드2", "키워드3", "키워드4", "키워드5", "키워드6"].map((v) => (
          <span
            key={v}
            className="rounded-[12px] bg-[#E8ECFF] px-[12px] py-[8px] text-[13px] text-[#3B5BDB]"
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlaceStatistic() {
  return (
    <div className="rounded-[16px] bg-white px-[16px] py-[20px] text-black shadow-sm">
      <p className="mb-[12px] text-center text-[15px]">자주 간 장소예요!</p>
      <div className="flex flex-wrap justify-center gap-[12px]">
        {["키워드1", "키워드2", "키워드3", "키워드4", "키워드5", "키워드6"].map((v) => (
          <span
            key={v}
            className="rounded-[12px] bg-[#E8ECFF] px-[12px] py-[8px] text-[13px] text-[#3B5BDB]"
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

function CategoryStatistic({ data, options }) {
  return (
    <div className="rounded-[16px] bg-white px-[16px] py-[20px] text-black shadow-sm">
      <p className="mb-[16px] text-center text-[15px]">꿈 종류별 횟수</p>
      <div className="max-h-[260px] w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

function EmotionStatistic() {
  return (
    <div className="rounded-[16px] bg-white px-[16px] py-[20px] text-black shadow-sm">
      <p className="mb-[16px] text-center text-[15px]">이번달에 느낀 감정</p>
      <div className="flex flex-wrap justify-center gap-[12px]">
        {["키워드1", "키워드2", "키워드3", "키워드4", "키워드5", "키워드6"].map((v) => (
          <span
            key={v}
            className="rounded-[12px] bg-[#E8ECFF] px-[12px] py-[8px] text-[13px] text-[#3B5BDB]"
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function StatisticPage() {
  // Swiper 관련
  const swiperRef = useRef<SwiperRef>(null);

  const slides = [
    { label: "키워드", component: <KeywordStatistic /> },
    { label: "감정", component: <EmotionStatistic /> },
    { label: "장소", component: <PlaceStatistic /> },
    { label: "인물", component: <PeopleStatistic /> },
  ];

  const labels = ["일반", "루시드드림", "악몽", "반복적 꿈", "예지몽", "생생한 꿈"];

  const data = {
    labels,
    datasets: [
      {
        label: "꿈 종류별 횟수",
        data: [16, 0, 2, 0, 0, 0],
        backgroundColor: "oklch(0.704 0.216 275.7)",
        borderRadius: 8,
        barThickness: 32,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 } },
      },
      y: {
        min: 0,
        max: 20,
        ticks: { stepSize: 5, font: { size: 10 } },
        grid: { color: "rgba(0,0,0,0.08)" },
      },
    },
  };

  // 월 선택 input
  const [month, setMonth] = useState("2025-01"); // React 상태
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="hide-scrollbar flex h-full w-full flex-col gap-[24px] overflow-y-scroll px-[20px] py-[24px]">
      {/* 헤더 텍스트 */}
      {/* 이 부분에서 h-[200px]은 적용되지 않는 이유는 부모가 명확한 높이를 가지고 있지 않아 flex 레이아웃이 자식의 높이를 shrink 시켜서 h-[200px]이 무시된다. */}
      <div className="flex h-[100px] shrink-0 flex-col justify-center text-center text-[#EFEFEF]">
        <p className="text-[18px] font-semibold">권력남용님의 꿈 분석</p>
        <p className="text-[16px]">지난 한달 간의 꿈 데이터를 모아봤어요.</p>
      </div>
      <div className="relative">
        <button
          onClick={() => inputRef.current?.showPicker?.() || inputRef.current?.click()}
          className="p-lg flex w-[100px] items-center justify-between rounded-lg"
        >
          <span className="text-[12px] text-[#1A1A1A]">{month.replace("-", "년 ") + "월"}</span>
          <span className="text-[#999]">▼</span>
        </button>
        <input
          type="month"
          ref={inputRef}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="pointer-events-none block h-0 opacity-0"
          min="2020-01"
          max="2030-12"
        />
      </div>
      {/* 통계 자료 모음 */}
      <CategoryStatistic data={data} options={options} />
      <div className="flex">
        {slides.map((slide, idx) => (
          <button
            key={`${slide.label} 버튼`}
            className={`p-lg flex-1 ${swiperRef.current?.swiper.activeIndex == idx ? "border-b-1" : ""}`}
            onClick={() => {
              swiperRef.current?.swiper.slideTo(idx, 1000);
            }}
          >
            {slide.label}
          </button>
        ))}
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination]}
        slideToClickedSlide={true}
        className="mySwiper w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`${slide.label} 슬라이드`} onClick={() => {}}>
            {slide.component}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 테스트용 */}
      {/* <form className="">
         <label
           className="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200"
         >
           Google Pay
           <input type="radio" name="test" className="opacity-0 checked:border-indigo-500" />
         </label>
               <label
           className="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200"
         >
           Google Pay
           <input type="radio"  name="test" className="opacity-0 checked:border-indigo-500" />
         </label>
       </form> */}
    </div>
  );
}

/**
 * TODO: 날짜 UI 수정 필요! 토스나 MUI 디자인을 참고해보자!
 *
 */
