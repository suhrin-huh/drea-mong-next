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
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="gap-y-md flex flex-col">
      <DatePicker value={dream.writeTime} onChange={(value) => updateField("writeTime", value)} />
      <ContentEditor value={dream.content} onChange={(value) => updateField("content", value)} />
      <InterpGenerator
        value={dream.interp}
        onChange={(value) => updateField("interp", value)}
        getFormData={getFormData}
      />
      <ImageGenerator
        value={dream.interp}
        onChange={(value) => updateField("image", value)}
        getFormData={getFormData}
      />
      <ShareToggleBox
        value={dream.isShared}
        onChange={(value) => updateField("isShared", value)}
        getFormData={getFormData}
      />
      <Button variant="primary" size="md" className="p-md mx-auto" rounded="md" type="submit">
        저장하기
      </Button>
    </form>
  );
}
