"use client";

// library
import { useState } from "react";

// types
import { Profile } from "@/types";

interface UserGreetingProps {
  profile: Profile;
}

export default function UserGreeting({ profile }: UserGreetingProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`text-h3 flex flex-col items-center justify-center gap-3 overflow-hidden text-white transition-all duration-300 ease-in-out ${isOpen ? "h-[200px]" : "h-[600px]"} `}
    >
      <p>안녕하세요, {profile.nickname} 님!</p>
      <button onClick={handleClick}>Click!</button>
      <p
        className={`text-base transition-all duration-1000 ease-in-out ${isOpen ? "text-black opacity-0" : "text-white"} `}
      >
        {!!profile.totalCount
          ? `${profile.totalCount + 1}번째 꿈을 작성하세요.`
          : `첫번째 꿈을 작성해주세요.`}
      </p>
    </div>
  );
}
