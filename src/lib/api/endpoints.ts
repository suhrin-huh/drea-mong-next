// API 경로

export const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`;

export const endpoints = {
  auth: {
    login: "/auth/kakao/login",
    logout: "/auth/logout",
  },
  users: {},
};
