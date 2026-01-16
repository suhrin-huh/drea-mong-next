"use client";

// component
import DateSelector from "./DateSelector";
import DreamList from "./DreamList";

// hooks
import { useYearMonth } from "@/hooks/useYearMonth";
import { useMyDreamList } from "@/hooks/queries/queries";

// type
import { MyDreamSummary } from "@/types/dream";
import { ApiResponse } from "@/types/api";

interface MainClientComponentProps {
  initialDreamList: MyDreamSummary[];
}

export default function MainClientComponent({ initialDreamList }: MainClientComponentProps) {
  const { year, month, handleYear, handleMonth } = useYearMonth();

  // year, month가 변경되면 자동으로 refetch
  const {
    data: dreamListResponse,
    isLoading,
    isFetching,
    dataUpdatedAt,
    isStale,
  } = useMyDreamList(year, month, {
    initialData: {
      status: 200,
      message: "success",
      data: initialDreamList,
    } as ApiResponse<MyDreamSummary[]>,
    // 초기 데이터가 있으면 즉시 stale하지 않도록 설정
    staleTime: 1000 * 60, // 1분
  });

  // 개발 환경에서 React Query 상태 디버깅 정보 출력
  if (process.env.NODE_ENV === "development") {
    console.log("📊 [React Query 상태]", {
      queryKey: ["myDreamList", year, month],
      isLoading,
      isFetching,
      isStale,
      dataUpdatedAt: dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString() : null,
      hasData: !!dreamListResponse,
      dataLength: dreamListResponse?.data?.length || 0,
      isCached: !isFetching && !!dreamListResponse, // 캐시된 데이터 사용 중인지 확인
    });
  }

  const dreamList = dreamListResponse?.data || [];

  return (
    <>
      <DateSelector year={year} month={month} handleMonth={handleMonth} handleYear={handleYear} />
      <DreamList dreamList={dreamList} />
    </>
  );
}
