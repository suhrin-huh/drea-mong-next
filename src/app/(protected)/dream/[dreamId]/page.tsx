import { getMyDreamDetailServer } from "@/lib/api/queries";

// components
import HeaderBar from "@/components/bar/HeaderBar";
import MyDreamClientComponent from "../_components/MyDreamClientComponent";
import { DreamId } from "@/types";

// types
type MyDreamDetailPageProps = {
  params: { dreamId: DreamId };
};

/**
 * @component DreamNew
 * @description 꿈 생성 페이지
 */
export default async function MyDreamDetailPage({ params }: MyDreamDetailPageProps) {
  const { dreamId } = params;

  // 꿈 목록 가져오기
  const dreamRes = await getMyDreamDetailServer(dreamId);
  const initialDream = dreamRes.data;

  return (
    <>
      <HeaderBar />
      <MyDreamClientComponent initialData={initialDream} />
    </>
  );
}
