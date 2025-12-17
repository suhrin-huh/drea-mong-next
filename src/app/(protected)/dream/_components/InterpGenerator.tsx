"use client";

// library
import { useState, useCallback } from "react";

// components
import Button from "@/components/common/Button";

import { Content, Interp, MyDreamDetail } from "@/types";

interface InterpGeneratorProps {
  value: MyDreamDetail["interp"];
  onChange: (value: MyDreamDetail["interp"]) => void;
  getFormData: () => MyDreamDetail;
}

/**
 * @component InterpGenerator
 * @description 해석을 생성하고, 모달창을 띄우는 기능
 */
export default function InterpGenerator({ value, onChange, getFormData }: InterpGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  const handleInterpGenerate = useCallback(async (content: Content) => {
    setIsLoading(true);
    onChange(null);
    // setError(null);

    setTimeout(() => {
      try {
        const res =
          "해석이 다음과 같습니다. 이 꿈은 현재 삶에서의 불안과 방향성에 대한 고민을 상징합니다.감정 상태나 인생 전반을 의미하며, 잔잔하다가 거칠어지는 것은 최근의 스트레스나 변화 상황을 나타냅니다.";
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
      <input type="hidden" name="interp" value={value ?? ""} />

      {isLoading && <RenderLoading />}

      {!isLoading && value && <RenderInterp value={value} handleClick={() => onChange("")} />}

      {!isLoading && !value && (
        <RenderButton
          disabled={isLoading}
          handleClick={() => handleInterpGenerate(getFormData().content)}
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
  //   return <RenderInterp value={value} handleClick={() => onChange("")}/>;
  // }
  // // 기본 상태: 버튼 표시
  // return <RenderButton disabled={isLoading} handleClick={() => handleInterpGenerate(getFormData().content)}/>;
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
      className="p-md"
      rounded="md"
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      꿈 해석하기
    </Button>
  );
}

interface RenderInterpProps {
  value: Interp;
  handleClick: () => void;
}

/**
 * @component RenderInterp
 * @description 생성된 이미지 및 초기화 버튼 UI
 */
function RenderInterp({ value, handleClick }: RenderInterpProps) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg bg-black/20 p-lg">
      <p className="text-h4 font-bold">해몽 결과</p>
      <p>{value}</p>
      <Button
        variant="primary"
        size="md"
        className="p-md"
        rounded="md"
        type="button"
        onClick={handleClick} // 이미지 숨기기 및 초기 상태로 복귀
      >
        해석 초기화
      </Button>
    </div>
  );
}

/**
 * @component RenderLoading
 * @description 로딩 스피너 UI
 */
function RenderLoading() {
  return (
    <div className="flex h-40 flex-col items-center justify-center gap-y-lg rounded-lg bg-black/20 p-lg">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p>꿈을 분석하는 중입니다.</p>
    </div>
  );
}
