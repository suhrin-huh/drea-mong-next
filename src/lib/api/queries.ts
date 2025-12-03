// fetch 함수 및 인스턴스
// import httpClient from "./fetcher/http-client";
import { serverFetcher } from "./fetcher/server-fetcher";

import { GET_MY_PROFILE,
  GET_MY_DREAM_LIST,
  GET_MY_DREAM_DETAIL,
  GET_SHARED_DREAM_LIST,
  GET_SHARED_DREAM_DETAIL, } from "./endpoints";

// types
import {
  MyDreamDetail,
  MyDreamList,
  SharedDreamList,
  SharedDreamDetail,
  DreamId,
  Profile
} from "@/types";

// TODO: 여기에서 처리를 fetcher<Profile>로 하기보다는 fetch<ApiResponse<Profile>>이 나은가..?

/** --- 서버 query --- */

/**
 * 유저 정보 조회 - 서버 전용
 */
export async function  getMyProfileServer () {
  return serverFetcher<Profile>(GET_MY_PROFILE());
}
/**
 * 꿈 조회 - 서버 전용
 * @params year, month
 */
export async function  getMyDreamListServer (year: number, month: number) {
  const params = new URLSearchParams({ year: String(year), month: String(month) });
  return serverFetcher<MyDreamList>(`${GET_MY_DREAM_LIST()}?${params}`);
}
/**
 * 꿈 상세 조회 - 서버 전용
 * @params dreamId
 */
export async function  getMyDreamDetailServer (dreamId: DreamId) {
  return serverFetcher<MyDreamDetail>(GET_MY_DREAM_DETAIL(dreamId));
}
/**
 * 공유된 꿈 목록 조회 - 서버 전용
 */
export async function  getSharedDreamListServer () {
  return serverFetcher<SharedDreamList>(GET_SHARED_DREAM_LIST());
}
/**
 * 공유된 꿈 상세 조회 - 서버 전용
 * @params dreamId
 */
export async function  getSharedDreamDetailServer (dreamId: DreamId) {
  return serverFetcher<SharedDreamDetail>(GET_SHARED_DREAM_DETAIL(dreamId));
}

/** --- 클라이언트 query --- */

// // Auth
// export const LOGIN = () => `/auth/login`;
// export const LOGOUT = () => ``;

// // Oauth
// export const OAUTH_LOGIN = (provider: string) => `/auth/oauth/${provider}`;
// export const OAUTH_LOGOUT = (provider: string) => `/auth/oauth/${provider}/callback`;

// // User
// export const GET_MY_PROFILE = () => `/users/me`;
// export const PATCH_NICKNAME = () => `/users/me/nickname`;

// // Dream
// export const GET_MY_DREAMS = () => `/dreams`;
// export const CREATE_DREAM = () => `/dreams`;
// export const GET_MY_DREAM_DETAIL = (dreamId: number) => `/dreams/${dreamId}`;
// export const UPDATE_DREAM = (dreamId: number) => `/dream/${dreamId}`;
// export const DELETE_DREAM = (dreamId: number) => `/dream/${dreamId}`;

// // AI Functions
// export const GENERATE_IMAGE = () => `/dreams/image`;
// export const GENERATE_INTERPRETATION = () => `/dreams/interpretation`;

// // Shared Dream
// export const GET_SHARED_DREAMS = () => `/dreams/shared`;
// export const GET_SHARED_DREAM_DETAIL = (dreamId: number) => `/dream/shared/${dreamId}`;

// // Comments
// export const CREATE_COMMENT = (dreamId: number) => `/dream/${dreamId}/comments`;
// export const DELETE_COMMENT = (dreamId: number, commentId: number) =>
//   `/dream/${dreamId}/comments/${commentId}`;
