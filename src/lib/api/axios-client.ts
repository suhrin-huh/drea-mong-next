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

// 요청 인터셉터 - API 호출 로깅
httpClient.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Request] ${config.method?.toUpperCase()} ${config.url}`,
        {
          baseURL: config.baseURL,
          params: config.params,
          data: config.data,
        },
      );
    }
    return config;
  },
  (error) => {
    if (process.env.NODE_ENV === "development") {
      console.error("[API Request Error]", error);
    }
    return Promise.reject(error);
  },
);

// 응답 인터셉터
httpClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`,
        {
          status: response.status,
          data: response.data,
        },
      );
    }
    return response;
  },
  (error) => {
    if (process.env.NODE_ENV === "development") {
      console.error(
        `${error.config?.method?.toUpperCase()} ${error.config?.url}`,
        {
          status: error.response?.status,
          message: error.message,
          data: error.response?.data,
        },
      );
    }
    if (error.response?.status === 401) {
      console.warn("인증 오류 발생");
      // redirectToLoginPage()
    }
    return Promise.reject(error);
  },
);

export default httpClient;
