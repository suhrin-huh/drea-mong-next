export const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`; // 이거 버전을 명명해야하나?

// Auth
export const LOGIN = () => `/auth/login`;
export const LOGOUT = () => ``;

// Oauth
export const OAUTH_LOGIN = (provider: string) => `/auth/oauth/${provider}`;
export const OAUTH_LOGOUT = (provider: string) => `/auth/oauth/${provider}/callback`;

// User
export const GET_MY_PROFILE = () => `/users/me`;
export const PATCH_NICKNAME = () => `/users/me/nickname`;

// Dream
export const GET_MY_DREAM_LIST = () => `/dreams/me`;
export const CREATE_DREAM = () => `/dreams/me`;
export const GET_MY_DREAM_DETAIL = (dreamId: number) => `/dreams/me/${dreamId}`;
export const UPDATE_DREAM = (dreamId: number) => `/dreams/me/${dreamId}`;
export const DELETE_DREAM = (dreamId: number) => `/dreams/me/${dreamId}`;

// AI Functions
export const GENERATE_IMAGE = () => `/dreams/me/image`;
export const GENERATE_INTERPRETATION = () => `/dreams/me/interpretation`;

// Shared Dreams
export const GET_SHARED_DREAM_LIST = () => `/dreams/shared`;
export const GET_SHARED_DREAM_DETAIL = (dreamId: number) => `/dreams/shared/${dreamId}`;

// Comments
export const CREATE_COMMENT = (dreamId: number) => `/dreams/${dreamId}/comments`;
export const DELETE_COMMENT = (dreamId: number, commentId: number) =>
  `/dreams/${dreamId}/comments/${commentId}`;

// export const  = () => ``;
