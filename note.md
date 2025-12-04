### Navbar 코드 수정하기

- 기존의 코드 : class가 중복되고 코드가 복잡하다.

```tsx
"use client";

import Link from "next/link";
import { TbAppleFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

type Page = {
  name: string;
  href: string;
  icon: (isActive: boolean) => React.ReactNode;
}[];

export default function Navbar() {
  const pathname = usePathname();
  const iconClass = "h-[35px] aspect-square";
  const pages: Page = [
    {
      name: "HOME",
      href: "/",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary group-hover:text-primary-hover" : "text-secondary group-hover:text-secondary-hover"}`}
        />
      ),
    },
    {
      name: "SQUARE",
      href: "/square",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary group-hover:text-secondary-hover"}`}
        />
      ),
    },
    {
      name: "DREAM",
      href: "/dream/new",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary group-hover:text-secondary-hover"}`}
        />
      ),
    },
    {
      name: "STREAM",
      href: "/stream",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary group-hover:text-secondary-hover"}`}
        />
      ),
    },
    {
      name: "SETTINGS",
      href: "/settings",
      icon: (isActive) => (
        <TbAppleFilled
          size={35}
          className={`${iconClass} ${isActive ? "text-primary hover:text-primary-hover" : "text-secondary group-hover:text-secondary-hover"}`}
        />
      ),
    },
  ];
  return (
    <nav className="flex h-[80px] justify-between gap-x-3 bg-white p-5 text-xs font-bold">
      {pages.map((page) => {
        const isActive = pathname == page.href;
        return (
          <Link
            href={page.href}
            key={page.name}
            className={`group flex flex-col items-center justify-center`}
          >
            {page.icon(isActive)}
            <p
              className={
                isActive
                  ? `text-primary group-hover:text-primary-hover`
                  : "text-secondary group-hover:text-secondary-hover"
              }
            >
              {page.name}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
```

- 수정 후의 코드

```tsx
"use client";

/**component */
import Link from "next/link";

/**library */
import { usePathname } from "next/navigation";
import { ComponentType } from "react";

/** icons */
import type { IconType } from "react-icons/lib";
import { ImPlay, ImPencil, ImHome, ImCog, ImCloud } from "react-icons/im";

interface IconWrapperProps {
  icon: ComponentType<{ className?: string; size?: number }>; // 이 타입에 대해서 제대로 모르는거 아닐까..??
  size: number;
  isActive?: boolean;
}

function IconWrapper({ icon: Icon, size, isActive }: IconWrapperProps) {
  const iconClass = `aspect-square transition-colors duration-200 ${
    isActive
      ? "text-primary group-hover:text-primary-hover"
      : "text-secondary group-hover:text-secondary-hover"
  }`;
  return <Icon size={size} className={iconClass} />;
}

type Page = {
  name: string;
  href: string;
  icon: IconType;
}[];

export default function Navbar() {
  const pathname = usePathname();

  const pages: Page = [
    {
      name: "HOME",
      href: "/",
      icon: ImHome,
    },
    {
      name: "SQUARE",
      href: "/square",
      icon: ImCloud,
    },
    {
      name: "DREAM",
      href: "/dream/new",
      icon: ImPencil,
    },
    {
      name: "STREAM",
      href: "/stream",
      icon: ImPlay,
    },
    {
      name: "SETTINGS",
      href: "/settings",
      icon: ImCog,
    },
  ];

  return (
    <nav className="flex h-[70px] justify-between gap-x-3 bg-white p-1 px-5 text-xs">
      {pages.map((page) => {
        const isActive = pathname == page.href;
        return (
          <Link
            href={page.href}
            key={page.name}
            className="group flex flex-col items-center justify-center"
          >
            <IconWrapper icon={page.icon} size={25} isActive={isActive} />
            <p
              className={
                isActive
                  ? "text-primary group-hover:text-primary-hover"
                  : "text-secondary group-hover:text-secondary-hover"
              }
            >
              {page.name}
            </p>
          </Link>
        );
      })}
    </nav>
  );
}
```

### Login Page 코드 수정하기

```tsx
// 'use client'

/** components */
import Button from "@/components/common/Button";
import Navbar from "@/components/common/Navbar";
// import Image from "next/image";

/** assets */
// import KakaoOauthImage from '@/assets/images/kakao_login_medium_wide.png'

/** library */
// import api from '@/lib/api';
// import { useRouter } from 'next/navigation';

export default function LoginPage() {
  // const router = useRouter();
  // local test 마친 코드
  // const handleLogin = async () => {
  // console.log("handleLogin")
  // window.location.href = "http://localhost:4000/auth/kakao";
  // try {
  //   const res = await api.post("/test/login", {username:'민채'});
  // 	console.log(res);
  // 	if (res.status == 200) {
  //     router.push('/')
  //   }
  // } catch (err) {
  // 	console.log(err)
  // }
  // };

  return (
    <div className="flex h-full w-full flex-col">
      <div className="gap-lg flex flex-1 flex-col items-end justify-center px-[12px] font-bold text-white">
        <h1 className="text-h1">DREA-MONG</h1>
        <div className="gap-md flex flex-col items-end justify-center">
          <p className="text-subtitle">꿈의 비밀을 통해</p>
          <p className="text-subtitle">자신을 발견해보세요.</p>
        </div>
      </div>
      <div className="flex h-[200px] flex-col justify-center px-3">
        <Button type="button" variant="outlined" size="full" rounded="md">
          {/* <Image src={KakaoOauthImage} alt="카카오 Oauth 로그인 버튼" className="w-full h-full"/> */}
          버튼
        </Button>
      </div>
      <Navbar />
    </div>
  );
}

/**
 * 
 *   children,
  variant,
  size = 'md',
  rounded = 'lg',
  shadow = false,
  className = '',
  ...props
 */
```

### 타입 고민

### 이미지는 타입을 어떻게 정의하나?

// src/types/images.d.ts

// 1. PNG, JPG, GIF 같은 정적 이미지 import 타입 선언
declare module "_.png" {
const value: string;
export default value;
}
declare module "_.jpg" {
const value: string;
export default value;
}
declare module "_.jpeg" {
const value: string;
export default value;
}
declare module "_.gif" {
const value: string;
export default value;
}

// 2. SVG를 React 컴포넌트로 사용하고 싶을 때
declare module "_.svg" {
import _ as React from "react";
const ReactComponent: React.FunctionComponent<
React.SVGProps<SVGSVGElement> & { title?: string }

> ;
> export default ReactComponent;
> }

// ==============================
// 사용 예시
// ==============================

// (1) public 폴더 이미지 → string 경로
const imgPath: string = "/images/logo.png";

// (2) import 해서 사용
import logo from "./logo.png";
const App1 = () => <img src={logo} alt="logo" />;

// (3) SVG를 컴포넌트로 사용 (svgr 설정 필요)
import Logo from "./logo.svg";
const App2 = () => <Logo width={50} height={50} />;

### fetch.ts 코드

```ts
// fetch wrapper
import { cookies } from "next/headers";
/**
 * Next.js에서 제공하는 함수, 서버 컴포넌트나 서버 액션에서 요청에 포함된 쿠키 정보를 가져올 수 있게 해주는 함수이다.
 * 서버에서 실행될 때 사용 가능하고, 클라이언트에서는 사용이 불가능하다.
 * 보통 인증 정보를 처리할 때 많이 사용된다.
 *
 * Q. 왜 쿠키 정보를 가져와야할까요?
 * A. 우선, `credentials : 'include`는 브라우저에서 같은 출처(Origin)이 아니더라도 쿠키나 인증 정보를 포함하라는 의미이다. 클라이언트 측 fetch 에서 이걸 설정하면, 브라우저가 자동으로 쿠키를 요청에 포함시켜준다.
 * 그러나, 우리는 서버 측(fetchFromAPI 함수는 서버에서 실행된다.)에서 fetch를 사용하고 있다.
 * 즉, 브라우저가 중간에 없기 때문에 자동으로 쿠키를 포함시켜주는 기능은 없기 때문에 직접 쿠키를 꺼내서 헤더에 넣어줘야 한다.
 *
 * 쿠키를 헤더에 수동으로 넣을 때에는 `이름=값; `으로 구분해서 하나의 문자열로 만들어야한다.
 *
 *
 * Q. 그럼, 쿠키는 어디에 있던건가?
 * A. 브라우저가 Next.js에 요청할 때, 그 요청에 포함된 쿠키를 Next.js가 읽는 것이다.'
 */
//
import { API_BASE_URL } from "./endpoints";
import { redirect } from "next/navigation";

/**
 * 기본 fetch 설정 (RequestInit) 에 Next.js에서 사용하는 next 옵션을 추가한 타입
 */
// type FetchOptions = RequestInit & {
//   next?: NextFetchRequestConfig // Next.js 전용 캐시 옵션
// }

// interface 방식으로 작성시
interface FetchOptions extends RequestInit {
  next?: NextFetchRequestConfig; // Next.js 전용 캐시 옵션
}

/**
 * Next.js 전용 캐시 옵션에는 뭐가 있을까?
 * 브라우저에서는 무시되며, fetch 호출시에만 사용 가능
 * revalidate : number | null; => ISR(Incremental Static Regeneration) 기능을 제어하는 옵션이다. 페이지나 데이터를 얼마마다 다시 가져올지 설정하는 값
 *
 * tags : string[] => 캐시 무효화를 직접 제어하기 위한 태그로 설정할 수 있다. 후에 revalidateTag(tag-name)을 호출해서 명시적으로 해당 태그를 가진(순서 상관 X, 포함 관계에 있는!) 캐시를 무효화할 수 있다.
 */

export async function serverFetch<T>(path: string, options?: FetchOptions): Promise<T> {
  const cookieStore = cookies();
  const cookieHeader = (await cookieStore)
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options, // 먼저 펼쳐서 다른 옵션들이 덮어쓰여지도록
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}), // options 중에 다른 header 옵션이 있다면 추가
      cookie: cookieHeader, // 꺼낸 쿠키도 추가
    },
    credentials: "include", // 보호 차원에서 안전하게 한번 더 명시한 것일수도 있다.
    next: options?.next,
  });

  /** res.ok는 응답 상태가 200번대이면 true를 반환한다.  */
  if (!res.ok) {
    // 여기에서 상태
    if (res.status === 401) {
      redirect("/login");
    }

    if (res.status === 403) {
      redirect("/");
    }
    console.error(`[fetchFromAPI] ${res.status} ${res.statusText}`);
    throw new Error(`API 요청 실패: ${res.statusText}`);
  }

  try {
    return await res.json(); // 응답 본문을 json() 객체로 파싱해서 반환한다. 본문이 json 형식이 아닐 수 있기 때문에 안전하게 감싼다.
  } catch (err) {
    throw new Error("응답 데이터를 JSON으로 파싱할 수 없습니다.");
  }
}
```

### OauthList 코드 (1125)

```jsx
"use client";

// component
import Button from "@/components/common/Button";
import { IoChatbubble } from "react-icons/io5";
import axios from "@/lib/api/axios";
import { endpoints } from "@/lib/api/endpoints";
import { useRouter } from "next/navigation";

export default function OAuthList() {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const data = { userId: 1, username: "홍길동" };
      const res = await axios.post(endpoints.auth.login, data); // button으로 인해 client component
      router.replace("/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-[300px] flex-col justify-center">
      <Button
        type="button"
        variant="none"
        size="full"
        rounded="md"
        className="flex h-[50px] items-center rounded-lg bg-yellow-300 p-2"
        onClick={handleLogin}
      >
        <IoChatbubble size={30} />
        <p className="flex-1 text-base font-bold">카카오 로그인</p>
      </Button>
    </div>
  );
}
```

### axios 코드(1125)

```jsx
// 클라이언트 전용 인스턴스
"use client";

import axios from "axios";
import { API_BASE_URL } from "./endpoints";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 응답 인터셉터 (예: 401 처리)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("인증 오류 발생");
      // redirectToLoginPage()
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
```

### Login 페이지 컴포넌트 분리하기

### pr 형식

```
## 소제목을 입력해주세요.
### 변경 사항 상세 내용
구현 내용을 구체적으로 작성합니다. 파일 경로 또는 주요 함수/클래스 이름을 언급하면 리뷰어가 빠르게 해당 코드를 찾아볼 수 있습니다.

- `src/auth/Login.js`

Next.js의 `Image` 컴포넌트의 fill은 부모 기준으로 적용 => relative 필요

- `src/auth/Login.js`

Next.js의 `Image` 컴포넌트의 fill은 부모 기준으로 적용 => relative 필요

```
