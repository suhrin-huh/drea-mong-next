import { useRef, useCallback, useEffect } from "react";

interface UseInfiniteScrollProps {
  fetchNextPage: () => void;
  threshold?: number;
  hasNextPage: boolean;
}

/**
 * @hooks useInfiniteScroll
 * @param fetchNextPage: fetch 함수
 * @param threshold: 스크롤 감지할 임계점(0 ~ 1)
 * @param hasNextPage: 추가 로딩 가능 상태 확인
 * @return targetRef
 */
export function useInfiniteScroll({
  fetchNextPage,
  threshold,
  hasNextPage,
}: UseInfiniteScrollProps) {
  const targetRef = useRef<HTMLElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      // 타겟이 화면에 보이고(isIntersecting), 다음 페이지가 있을 때만 fetch
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage],
  );

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    // 1. Observer 생성
    const observer = new IntersectionObserver(handleObserver, {
      threshold,
    });

    // 2. 타겟 관찰 시작
    observer.observe(target);

    // 3. 언마운트 시 관찰 중단
    return () => observer.unobserve(target);
  }, [handleObserver, threshold]);

  return { targetRef };
}
