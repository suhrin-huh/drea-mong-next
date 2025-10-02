// library
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// config
import { API_BASE_URL } from "./endpoints";

interface FetchOptions extends RequestInit {
  next?: NextFetchRequestConfig;
}

export async function serverFetch<T>(path: string, options?: FetchOptions): Promise<T> {
  const cookieStore = cookies();
  const cookieHeader = (await cookieStore)
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
      cookie: cookieHeader,
    },
    credentials: "include",
    next: options?.next,
  });

  if (!res.ok) {
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
    return await res.json();
  } catch (err) {
    throw new Error("응답 데이터를 JSON으로 파싱할 수 없습니다.");
  }
}
