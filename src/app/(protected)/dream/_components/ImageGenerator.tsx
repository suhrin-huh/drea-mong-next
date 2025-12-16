"use client";

// library
import { useState, useCallback } from "react";
import NextImage from "next/image";

// components
import Button from "@/components/common/Button";

// types
import { Content, Image, MyDreamDetail } from "@/types";

interface ImageGeneratorProps {
  value: Image;
  onChange: (value: Image) => void;
  getFormData: () => MyDreamDetail;
}

/**
 * @component ImageGenerator
 * @description 이미지 생성 및 조회하는 기능
 */
export default function ImageGenerator({ value, onChange, getFormData }: ImageGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const handleImageGenerate = useCallback(async (content: Content) => {
    setIsLoading(true);
    onChange("");
    // setError(null);

    setTimeout(() => {
      try {
        const res = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
        onChange(res);
      } catch (err) {
        console.error("해석 중 오류가 발생했습니다.");
        // setError("해석 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
    // API 연결 필요
  }, []);

  return (
    <>
      {/* ✅ form submit을 위한 hidden input */}
      <input type="hidden" name="image" value={value ?? ""} />

      {isLoading && <RenderLoading />}

      {!isLoading && value && <RenderImage value={value} handleClick={() => onChange("")} />}

      {!isLoading && !value && (
        <RenderButton
          disabled={isLoading}
          handleClick={() => handleImageGenerate(getFormData().content)}
        />
      )}
    </>
  );
  // if (error) {
  //   return <RenderError />;
  // }
  // if (isLoading) {
  //   return <RenderLoading />;
  // }

  // if (value) {
  //   return <RenderImage value={value} handleClick={() => onChange("")}/>;
  // }
  // // 기본 상태: 버튼 표시
  // return <RenderButton disabled={isLoading} handleClick={() => handleImageGenerate(getFormData().content)}/>;
}

interface RenderButtonProps {
  disabled: boolean;
  handleClick: () => Promise<void>;
}

/**
 * @component RenderButton
 * @description 기본 '꿈 해석하기' 버튼 UI
 */
function RenderButton({ disabled, handleClick }: RenderButtonProps) {
  return (
    <Button
      variant="primary"
      size="full"
      rounded="md"
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className="p-md gap-y-md flex h-[200px] shrink-0 flex-col items-center justify-center rounded rounded-md"
    >
      <NextImage src={"/palette.png"} alt="이미지 생성 아이콘" width={80} height={80} />
      <p>꿈 이미지 생성하기</p>
    </Button>
  );
}

interface RenderInterpProps {
  value: Image;
  handleClick: () => void;
}

/**
 * @component RenderImage
 * @description 생성된 이미지 및 초기화 버튼 UI
 */

function RenderImage({ value, handleClick }: RenderInterpProps) {
  return (
    <div className="aspect-1/1 relative w-full bg-black/20">
      <NextImage src={value!} alt="AI로 생성된 이미지" fill className="object-cover" />
      <button
        className="aspect-sqaure absolute right-2 top-2 w-[30px] rounded-full bg-black/40"
        onClick={handleClick} // 이미지 숨기기 및 초기 상태로 복귀
      >
        X
      </button>
    </div>
  );
}

/**
 * @component RenderLoading
 * @description 로딩 스피너 UI
 */
function RenderLoading() {
  return (
    <div className="gap-y-lg p-lg flex h-40 flex-col items-center justify-center rounded-lg bg-black/20">
      <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
      <p>이미지를 생성하고 있습니다.</p>
    </div>
  );
}
