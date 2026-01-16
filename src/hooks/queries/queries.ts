"use client";

import { useQuery, useMutation, useQueryClient, UseQueryOptions } from "@tanstack/react-query";

import {
  getMyProfileClient,
  updateNicknameClient,
  getMyDreamListClient,
  createDreamClient,
  updateDreamClient,
  deleteDreamClient,
  generateImageClient,
  generateInterpretationClient,
  getSharedDreamListClient,
  getSharedDreamDetailClient,
  createCommentClient,
  deleteCommentClient,
  loginClient,
  logoutClient,
} from "@/services/client";

import {
  ApiResponse,
  Profile,
  MyDreamSummary,
  MyDreamDetail,
  SharedDreamSummary,
  SharedDreamDetail,
  Comment,
  DreamId,
} from "@/types";

/** --- Query Keys --- */
export const queryKeys = {
  profile: ["profile"] as const,
  myDreamList: (year: number, month: number) =>
    ["myDreamList", year, month] as const,
  myDreamDetail: (dreamId: DreamId) => ["myDreamDetail", dreamId] as const,
  sharedDreamList: (cursor: number) => ["sharedDreamList", cursor] as const,
  sharedDreamDetail: (dreamId: DreamId) =>
    ["sharedDreamDetail", dreamId] as const,
} as const;

/**
 * 내 프로필 조회
 */
export function useMyProfile(
  options?: Omit<
    UseQueryOptions<ApiResponse<Profile>, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: queryKeys.profile,
    queryFn: () => getMyProfileClient(),
    ...options,
  });
}

/**
 * 닉네임 수정
 */
export function useUpdateNickname() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nickname: string) => updateNicknameClient(nickname),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
    },
  });
}

/**
 * 내 꿈 목록 조회
 */
export function useMyDreamList(
  year: number,
  month: number,
  options?: Omit<
    UseQueryOptions<ApiResponse<MyDreamSummary[]>, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: queryKeys.myDreamList(year, month),
    queryFn: () => getMyDreamListClient(year, month),
    ...options,
  });
}

/**
 * 꿈 생성
 */
export function useCreateDream() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: MyDreamDetail) =>
      createDreamClient(data),
    onSuccess: () => {
      // 모든 월별 목록을 무효화 (새로운 꿈이 어느 달에 추가될지 모르므로)
      queryClient.invalidateQueries({ queryKey: ["myDreamList"] });
    },
  });
}

/**
 * 꿈 수정
 */
export function useUpdateDream() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      dreamId,
      data,
    }: {
      dreamId: DreamId;
      data: MyDreamDetail;
    }) => updateDreamClient(dreamId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myDreamDetail(variables.dreamId),
      });
      queryClient.invalidateQueries({ queryKey: ["myDreamList"] });
    },
  });
}

/**
 * 꿈 삭제
 */
export function useDeleteDream() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dreamId: DreamId) => deleteDreamClient(dreamId),
    onSuccess: (_, dreamId) => {
      queryClient.removeQueries({
        queryKey: queryKeys.myDreamDetail(dreamId),
      });
      queryClient.invalidateQueries({ queryKey: ["myDreamList"] });
      queryClient.invalidateQueries({ queryKey: ["sharedDreamList"] });
    },
  });
}

/**
 * 이미지 생성
 */
export function useGenerateImage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dreamId: DreamId) => generateImageClient(dreamId),
    onSuccess: (_, dreamId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myDreamDetail(dreamId),
      });
      queryClient.invalidateQueries({ queryKey: ["myDreamList"] });
    },
  });
}

/**
 * 해석 생성
 */
export function useGenerateInterpretation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dreamId: DreamId) => generateInterpretationClient(dreamId),
    onSuccess: (_, dreamId) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.myDreamDetail(dreamId),
      });
    },
  });
}

/**
 * 공유된 꿈 목록 조회
 */
export function useSharedDreamList(
  cursor = 0,
  options?: Omit<
    UseQueryOptions<ApiResponse<SharedDreamSummary[]>, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: queryKeys.sharedDreamList(cursor),
    queryFn: () => getSharedDreamListClient(cursor),
    ...options,
  });
}

/**
 * 공유된 꿈 상세 조회
 */
export function useSharedDreamDetail(
  dreamId: DreamId,
  options?: Omit<
    UseQueryOptions<ApiResponse<SharedDreamDetail>, Error>,
    "queryKey" | "queryFn"
  >,
) {
  return useQuery({
    queryKey: queryKeys.sharedDreamDetail(dreamId),
    queryFn: () => getSharedDreamDetailClient(dreamId),
    enabled: !!dreamId,
    ...options,
  });
}


/**
 * 댓글 생성
 */
export function useCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ dreamId, content }: { dreamId: DreamId; content: string }) =>
      createCommentClient(dreamId, content),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.sharedDreamDetail(variables.dreamId),
      });
    },
  });
}

/**
 * 댓글 삭제
 */
export function useDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      dreamId,
      commentId,
    }: {
      dreamId: DreamId;
      commentId: number;
    }) => deleteCommentClient(dreamId, commentId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.sharedDreamDetail(variables.dreamId),
      });
    },
  });
}

/**
 * 로그인
 */
export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      loginClient(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.profile });
    },
  });
}

/**
 * 로그아웃
 */
export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => logoutClient(),
    onSuccess: () => {
      queryClient.clear();
    },
  });
}