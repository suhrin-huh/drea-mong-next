"use client";

// component
import Button from "@/components/common/Button";
import { IoChatbubble } from "react-icons/io5";

export default function OAuthList() {
  const handleKaKaoLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/kakao/login`;
  };

  return (
    <div className="flex h-[300px] flex-col justify-center">
      <Button
        type="button"
        variant="none"
        size="full"
        rounded="md"
        className="flex h-[50px] items-center rounded-lg bg-yellow-300 p-2"
        onClick={handleKaKaoLogin}
      >
        <IoChatbubble size={30} />
        <p className="flex-1 text-base font-bold">카카오 로그인</p>
      </Button>
    </div>
  );
}
