// constants
import { FormEvent } from "react";

// components
import HeaderBar from "@/components/bar/HeaderBar";
import MyDreamClientComponent from "../_components/MyDreamClientComponent";
import { MyDreamDetail } from "@/types";
/**
 * @component DreamNew
 * @description 꿈 생성 페이지
 */
export default function DreamNew() {
  /**
   * 현재 날짜를 'YYYY-MM-DD' 형식의 문자열로 반환
   * @returns {string} 예: "2025-12-15"
   */
  function getDateString(date: Date): string {
    // 연도 (YYYY)
    const year = date.getFullYear();

    // 월 (MM): getMonth()는 0부터 시작하므로 +1을 해주고, 두 자리로 만듭니다.
    // padStart(2, '0')를 사용하여 한 자리 숫자 앞에 0을 붙입니다.
    const month = String(date.getMonth() + 1).padStart(2, "0");

    // 일 (DD): 두 자리로 만듭니다.
    const day = String(date.getDate()).padStart(2, "0");

    // YYYY-MM-DD 형식으로 조합하여 반환
    return `${year}-${month}-${day}`;
  }

  const initialDream: MyDreamDetail = {
    dreamId: null,
    writeTime: getDateString(new Date()),
    content: "",
    interp: null,
    image: null,
    isShared: false,
  };
  return (
    <>
      <HeaderBar />
      <MyDreamClientComponent initialData={initialDream} />
    </>
  );
}
