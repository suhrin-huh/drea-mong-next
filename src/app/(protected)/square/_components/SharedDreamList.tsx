"use client";

// library
import { useState } from "react";

// components
import SharedDreamCard from "./SharedDreamCard";
import LoadingSpinner from "./LoadingSpinner";

// hooks
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

// types
import { SharedDreamSummary } from "@/types";

interface SharedDreamListProps {
  initialData: SharedDreamSummary[];
}

export default function SharedDreamList({ initialData }: SharedDreamListProps) {
  const [dreamList, setDreamList] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  // 데이터를 더 가져오는 로직
  const fetchMoreDreams = async () => {
    if (loading) return;
    setLoading(true);

    // API 호출(client)
    // const nextCursor = dreamList[-1].dreamId;
    // const nextPageData = await getSharedDreamList(nextCursor);
    // setDreams((prev) => [...prev, ...nextPageData]);
    // setLoading(false);
  };

  // 훅 사용
  const { targetRef } = useInfiniteScroll({
    fetchNextPage: fetchMoreDreams,
    hasNextPage: hasNextPage,
    threshold: 0.1,
  });

  return (
    <>
      <div className="grid grid-cols-3 gap-sm">
        {dreamList.map((dream, idx) => {
          const isLastItem = idx === dreamList.length - 1;
          return (
            <SharedDreamCard
              href={`/square/${dream.dreamId}`}
              dream={dream}
              key={dream.dreamId}
              ref={isLastItem ? targetRef : null}
            />
          );
        })}
      </div>
      {loading && <LoadingSpinner />}
    </>
  );
}
