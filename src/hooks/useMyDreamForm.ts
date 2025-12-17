import { useState, useCallback, useRef } from "react";

import { MyDreamDetail } from "@/types";

interface UseMyDreamFormProps {
  initialData: MyDreamDetail;
}

/**
 * @param initialData 초기 데이터
 * @returns data, updateField, getFormData
 */
export function useMyDreamForm({ initialData }: UseMyDreamFormProps) {
  const [dream, setDream] = useState<MyDreamDetail>(initialData);
  // content 조회용 Ref (재렌더링 없이 값만 저장
  const formRef = useRef<MyDreamDetail>(initialData);
  //
  /**
   * 특정 필드만 업데이트하는 함수
   * state와 Ref를 모두 동기화
   */
  const updateField = useCallback(
    <K extends keyof MyDreamDetail>(key: K, value: MyDreamDetail[K]) => {
      // TODO: 화살표 함수에서는 매개변수 괄호 바로 앞에 붙는다.
      // TODO: 아래의 코드를 보면 상태를 관리할 때에 상태의 값이 예측가능하도록 만드려면 이렇게
      // setData에 return이 있는 함수로 제작해도 좋은 것 같다!! 오.. 이거 좋은 방법인듯!
      setDream((prev) => {
        const newDream = { ...prev, [key]: value };
        // state를 업데이트하면서 Ref도 최신값으로 초기화
        formRef.current = newDream;

        return newDream;
      });
    },
    [],
  );

  /**
   * 여러 필드를 한번에 업데이트하는 함수
   */
  // const updateFields = useCallback((fields: Partial<MyDreamDetail>) => {
  //   setDream((prev) => {
  //     const newDream = {
  //       ...prev,
  //       ...fields,
  //     };
  //     formRef.current = newDream;
  //     return newDream;
  //   });
  // }, []);

  /**
   * 최신 데이터를 가져오는 Getter 함수
   * 여러 필드가 필요한 자식 컴포넌트에서 현재 시점의 데이터가 필요할 때 사용
   */
  const getFormData = useCallback(() => {
    return formRef.current;
  }, []);

  return {
    dream,
    updateField,
    // updateFields,
    getFormData,
  };
}
