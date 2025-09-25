import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="ko">
      <body>
        <div className="h-full w-full bg-slate-500">
          <div className="mx-auto flex h-full min-h-[600px] w-full min-w-[300px] max-w-[500px] flex-col bg-[url(/background.svg)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
