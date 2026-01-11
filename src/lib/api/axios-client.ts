// 클라이언트 전용 인스턴스
"use client";

import axios from "axios";
import { API_BASE_URL } from "@/constants/api-routes";

// axios 인스턴스 생성

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 응답 인터셉터 (예: 401 처리)
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("인증 오류 발생");
      // redirectToLoginPage()
    }
    return Promise.reject(error);
  },
);

export default httpClient;
