'use client'

// library
import { useState, useRef } from "react"

// component
import Image from 'next/image';
import HeaderBar from "@/components/bar/HeaderBar";
import Button from "@/components/common/Button";
import ToggleButton from "@/components/common/ToggleButton";

// assets
import palette from '@/assets/images/palette.png'


// constant
import { MAX_LENGTH } from "@/constants/dream.constants";

type Image = String | null;

export default function DreamNewPage() {
  const [content, setContent] = useState("");
  const [isShared, setIsShared] = useState(false);
  const handleShared = () => {
    setIsShared((prev) => !prev)
  }
  
  return (
    <div className="flex flex-col flex-1 gap-y-md overflow-y-scroll hide-scrollbar">
      {/* HeaderBar */}
      < HeaderBar />
      {/* DatePicker */}
      <div className="flex justify-center text-white">
        <input
          type="date"
          className="rounded-lg border border-secondary p-1 text-base"
        />
      </div>
      {/* ContentBox */}
      <div className="relative rounded-lg bg-black/20">
        <textarea
          id="content"
          className={`h-[200px] w-full p-md text-white resize-none text-white placeholder:text-secondary`}
          placeholder="꿈 내용을 입력해주세요."
        />
        <p className="absolute bottom-md right-md text-secondary">
          {content.length}/{MAX_LENGTH}
        </p>
      </div>
      {/* Interpretation */}
      <div>
        <Button
          size="full"
          rounded="lg"
          variant="primary"
          onClick={() => {}}
        >
          <p>꿈 해석하기</p>
        </Button>
      </div>
      {/* ImageGenerator */}
      <Button size="full" variant="primary" rounded="lg" onClick={() => {}} className="aspect-square">
        <Image className="inline-block w-20 h-20" src={palette} alt="이미지 생성하기"/>
        <p className="font-bold">꿈 이미지 생성하기</p>
      </Button>
      {/* ShareColtrol */}
      <div className="flex flex-row justify-between p-2">
        <p className="text-white">꿈 공유하기</p>
        <ToggleButton flag={isShared} handleFlag={handleShared}/>
      </div>
      <div className="flex justify-center">
        <Button
          size="md"
          rounded="lg"
          variant="primary"
          type="submit"
        >
          저장하기
        </Button>
      </div>
    </div>
  )
}