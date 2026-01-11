// fetch 함수 및 인스턴스
import { serverFetcher } from "@/lib/api/server-fetcher";

import {
  GET_MY_DREAM_LIST,
  GET_MY_DREAM_DETAIL,
  GET_MY_PROFILE,
  GET_SHARED_DREAM_DETAIL,
  GET_SHARED_DREAM_LIST,
} from "@/constants/api-routes";

// types
import {
  MyDreamDetail,
  SharedDreamSummary,
  SharedDreamDetail,
  DreamId,
  Profile,
  MyDreamSummary,
} from "@/types";

// TODO: type 처리 => fetcher<> vs fetch<ApiResponse<Profile>>이 나은가..?

/** --- 서버 query --- */

/**
 * 유저 정보 조회 - 서버 전용
 */
export async function getMyProfileServer() {
  return serverFetcher<Profile>(GET_MY_PROFILE());
}
/**
 * 꿈 조회 - 서버 전용
 * @params year, month
 */
export async function getMyDreamListServer(year: number, month: number) {
  const params = new URLSearchParams({ year: String(year), month: String(month) });
  return serverFetcher<MyDreamSummary[]>(`${GET_MY_DREAM_LIST()}?${params}`);
}
/**
 * 꿈 상세 조회 - 서버 전용
 * @params dreamId
 */
export async function getMyDreamDetailServer(dreamId: DreamId) {
  return serverFetcher<MyDreamDetail>(GET_MY_DREAM_DETAIL(dreamId));
}
/**
 * 공유된 꿈 목록 조회 - 서버 전용
 */
export async function getSharedDreamListServer() {
  return serverFetcher<SharedDreamSummary[]>(GET_SHARED_DREAM_LIST());
}
/**
 * 공유된 꿈 상세 조회 - 서버 전용
 * @params dreamId
 */
export async function getSharedDreamDetailServer(dreamId: DreamId) {
  return serverFetcher<SharedDreamDetail>(GET_SHARED_DREAM_DETAIL(dreamId));
}
