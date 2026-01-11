import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";

export const metadata: Metadata = {
  title: "드리몽",
  description: "꿈을 기록하고 공유해보세요.",
};

/** Q. 배경화면 어떻게 적용하면 좋을까? 방법이 디게 많더라..
 * 우선 내가 사용하는 것은 전체에 적용할 배경화면!
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // :TODO 이 부분, 부모 요소에 flex를 사용하고 싶지 않아서 mx-auto 사용
  return (
    <html lang="ko">
      <head>
        {/* pretendard */}
        {/* <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" /> */}
        {/* noto sans kr */}
        <link
          rel="stylesheet"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
        />
      </head>
      <body>
        <QueryProvider>
          <div className="h-full w-full bg-slate-500">
            <div className="mx-auto flex h-full min-h-[600px] w-full max-w-[500px] min-w-[300px] flex-col bg-[url(/background.svg)] bg-cover bg-center">
              {children}
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
