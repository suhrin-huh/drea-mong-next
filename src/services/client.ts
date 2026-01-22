"use client";

// fetch 함수 및 인스턴스
import httpClient from "@/lib/api/axios-client";

import {
  LOGIN,
  LOGOUT,
  GET_MY_PROFILE,
  UPDATE_NICKNAME,
  GET_MY_DREAM_LIST,
  CREATE_DREAM,
  UPDATE_DREAM,
  DELETE_DREAM,
  GENERATE_IMAGE,
  GENERATE_INTERPRETATION,
  GET_SHARED_DREAM_LIST,
  GET_SHARED_DREAM_DETAIL,
  CREATE_COMMENT,
  DELETE_COMMENT,
} from "@/constants/api-routes";

// types
import {
  ApiResponse,
  MyDreamDetail,
  SharedDreamSummary,
  SharedDreamDetail,
  DreamId,
  Profile,
  MyDreamSummary,
  Comment,
} from "@/types";

/** --- 클라이언트 query --- */

/**
 * 유저 정보 조회 - 클라이언트 전용
 */
export async function getMyProfileClient() {
  const response = await httpClient.get<ApiResponse<Profile>>(GET_MY_PROFILE());
  return response.data;
}

/**
 * 닉네임 수정 - 클라이언트 전용
 */
export async function updateNicknameClient(nickname: string) {
  const response = await httpClient.patch<ApiResponse<Profile>>(
    UPDATE_NICKNAME(),
    { nickname },
  );
  return response.data;
}

/**
 * 꿈 목록 조회 - 클라이언트 전용
 * @params year, month
 */
export async function getMyDreamListClient(year: number, month: number) {
  const params = new URLSearchParams({ year: String(year), month: String(month) });
  const response = await httpClient.get<ApiResponse<MyDreamSummary[]>>(
    `${GET_MY_DREAM_LIST()}?${params}`,
  );
  return response.data;
}

/**
 * 꿈 생성 - 클라이언트 전용
 */
export async function createDreamClient(data: MyDreamDetail) {
  const response = await httpClient.post<ApiResponse<MyDreamDetail>>(
    CREATE_DREAM(),
    data,
  );
  return response.data;
}

/**
 * 꿈 수정 - 클라이언트 전용
 * @params dreamId
 */
export async function updateDreamClient(
  dreamId: DreamId,
  data: MyDreamDetail,
) {
  const response = await httpClient.patch<ApiResponse<MyDreamDetail>>(
    UPDATE_DREAM(dreamId),
    data,
  );
  return response.data;
}

/**
 * 꿈 삭제 - 클라이언트 전용
 * @params dreamId
 */
export async function deleteDreamClient(dreamId: DreamId) {
  const response = await httpClient.delete<ApiResponse<void>>(
    DELETE_DREAM(dreamId),
  );
  return response.data;
}

/**
 * 이미지 생성 - 클라이언트 전용
 */
export async function generateImageClient(dreamId: DreamId) {
  const response = await httpClient.post<ApiResponse<{ image: string }>>(
    GENERATE_IMAGE(),
    { dreamId },
  );
  return response.data;
}

/**
 * 해석 생성 - 클라이언트 전용
 */
export async function generateInterpretationClient(dreamId: DreamId) {
  const response = await httpClient.post<ApiResponse<{ interp: string }>>(
    GENERATE_INTERPRETATION(),
    { dreamId },
  );
  return response.data;
}

/**
 * 공유된 꿈 목록 조회 - 클라이언트 전용
 */
export async function getSharedDreamListClient(cursor = 0) {
  const response = await httpClient.get<ApiResponse<SharedDreamSummary[]>>(
    GET_SHARED_DREAM_LIST(cursor),
  );
  return response.data;
}

/**
 * 공유된 꿈 상세 조회 - 클라이언트 전용
 * @params dreamId
 */
export async function getSharedDreamDetailClient(dreamId: DreamId) {
  const response = await httpClient.get<ApiResponse<SharedDreamDetail>>(
    GET_SHARED_DREAM_DETAIL(dreamId),
  );
  return response.data;
}

/**
 * 댓글 생성 - 클라이언트 전용
 * @params dreamId
 */
export async function createCommentClient(dreamId: DreamId, content: string) {
  const response = await httpClient.post<ApiResponse<Comment>>(
    CREATE_COMMENT(dreamId),
    { content },
  );
  return response.data;
}

/**
 * 댓글 삭제 - 클라이언트 전용
 * @params dreamId, commentId
 */
export async function deleteCommentClient(dreamId: DreamId, commentId: number) {
  const response = await httpClient.delete<ApiResponse<void>>(
    DELETE_COMMENT(dreamId, commentId),
  );
  return response.data;
}

/**
 * 로그인(Oauth만 지원) - 클라이언트 전용
 */
export async function loginClient(data: { email: string; password: string }) {
  const response = await httpClient.post<ApiResponse<Profile>>(LOGIN(), data);
  return response.data;
}

/**
 * 로그아웃 - 클라이언트 전용
 */
export async function logoutClient() {
  const response = await httpClient.post<ApiResponse<void>>(LOGOUT());
  return response.data;
}
