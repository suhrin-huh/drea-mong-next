/**
 * @description API 응답의 기본 구조 정의
 * @template T 성공 시 data 필드에 담기는 payload 타입
 */

export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
  error?: ApiErrorDetail;
}

/*
 * @description API 에러 상세 정보 타입
 */
export interface ApiErrorDetail {
  code?: string;
  // TODO: 유효성 검사 실패 등 상세 에러 목록(목록으로 받을지 고려해보기)
  errors?: { field: string; reason: string };
}
