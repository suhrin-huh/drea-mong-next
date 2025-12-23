"use client";

// constants
import { FormEvent } from "react";

// custom hooks
import { useMyDreamForm } from "@/hooks/useMyDreamForm";

// components
import Button from "@/components/common/Button";
import DatePicker from "../_components/DatePicker";
import ContentEditor from "../_components/ContentEditor";
import InterpGenerator from "../_components/InterpGenerator";
import ShareToggleBox from "../_components/ShareToggleBox";
import ImageGenerator from "../_components/ImageGenerator";

// types
import { MyDreamDetail } from "@/types";

interface MyDreamClientComponentProps {
  initialData: MyDreamDetail;
}

/**
 * @component MyDreamClientComponent
 * @description 꿈 생성을 위한 핵심 form
 */

export default function MyDreamClientComponent({ initialData }: MyDreamClientComponentProps) {
  const { dream, updateField, getFormData } = useMyDreamForm({ initialData });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const isShared = formData.has("isShared"); // "on" or null이므로
    console.log(isShared); // true | false
    const params = {
      ...data,
      isShared,
    };
    console.log(params);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-md">
      <DatePicker value={dream.writeTime} onChange={(value) => updateField("writeTime", value)} />
      <ContentEditor value={dream.content} onChange={(value) => updateField("content", value)} />
      <InterpGenerator
        value={dream.interp}
        onChange={(value) => updateField("interp", value)}
        getFormData={getFormData}
      />
      <ImageGenerator
        value={dream.image}
        onChange={(value) => updateField("image", value)}
        getFormData={getFormData}
      />
      <ShareToggleBox value={dream.isShared} onChange={(value) => updateField("isShared", value)} />
      <Button variant="primary" size="md" className="mx-auto p-md" rounded="md" type="submit">
        저장하기
      </Button>
    </form>
  );
}
