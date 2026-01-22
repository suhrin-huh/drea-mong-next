// library
import { cookies } from "next/headers";

// config
import { API_BASE_URL } from "@/constants/api-routes";

// types
import { ApiResponse } from "@/types/api";

interface FetchOptions extends RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string[];
    cache?: "force-cache" | "no-store" | "only-if-cached";
  };
}
// --- 1. 커스텀 에러 클래스 정의하기 --

/**
 * @description API 호출 실패 시 발생하는 사용자 정의 에러 클래스
 * HTTP 상태 코드(status)와 비즈니스 에러 코드(code)를 포함합니다.
 */

export class FetchError extends Error {
  public status: number;
  // code는 우선 제외
  constructor(message: string, status: number) {
    super(message);
    this.status = status;

    // FetchError 클래스 이름으로 스택 트레이스를 시작하도록 설정
    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, FetchError);
    // }
    this.name = "FetchError";
  }
}

// ---2. 서버 Fetcher 함수 정의

/**
 * @description 서버 환경(Server Components)에서 사용되는 Fetch 유틸리티
 * 요청 시 자동으로 쿠키를 포함하며, 에러 발생 시 FetchError를 throw한다.
 * @template T 성공시 data payload 타입
 * @param url 호출할 API 엔드포인트
 * @param options fetch 옵션 (method, body 등)
 * @returns Promise<ApiResponse<T>>
 */
export async function serverFetcher<T>(
  url: string,
  options: FetchOptions = {},
): Promise<ApiResponse<T>> {
  //
  try {
    const cookieStore = cookies();
    const cookieHeader = (await cookieStore)
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
        cookie: cookieHeader,
      },
      credentials: "include",
      // next: options?.next,
    });

    if (!res.ok) {
      throw new FetchError("에러 발생", res.status);
    }

    return await res.json();
  } catch (error) {
    // JSON 파싱 실패 등의 오류도 발생할 수 있음
    throw error;
  }
}
