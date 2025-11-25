"use client";

import { useState } from "react";

import { userInfoMock } from "@/mocks/user.mock";

export default function UserGreeting() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`text-h3 flex flex-col items-center justify-center gap-3 overflow-hidden text-white transition-all duration-300 ease-in-out ${isOpen ? "h-[200px]" : "h-[600px]"} `}
    >
      <p>안녕하세요, {userInfoMock.username} 님!</p>
      <button onClick={handleClick}>Click!</button>
      <p
        className={`text-base transition-all duration-1000 ease-in-out ${isOpen ? "text-black opacity-0" : "text-white"} `}
      >
        오늘도 행복한 하루 보내시길 바랍니다.
      </p>
    </div>
  );

  return (
    <div className={"text-h3 flex h-[200px] flex-col items-center justify-center gap-3 text-white"}>
      <p>안녕하세요, {userInfoMock.username} 님!</p>
      <button onClick={handleClick}>클릭하기</button>
    </div>
  );
}
