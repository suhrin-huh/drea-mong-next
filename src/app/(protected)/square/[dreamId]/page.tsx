// components
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import HeaderBar from "@/components/bar/HeaderBar";
import SharedDreamContent from "./_components/SharedDreamContent";
import CommentSection from "./_components/CommentSection";

// types
import { DreamId } from "@/types";
import { getSharedDreamDetailServer } from "@/lib/api/queries";

interface SquareDetailProps {
  params: Promise<{ dreamId: DreamId }>;
}

export default async function SquareDetail({ params }: SquareDetailProps) {
  const { dreamId } = await params;
  const sharedDreamRes = await getSharedDreamDetailServer(dreamId);
  const sharedDream = sharedDreamRes.data;
  const initialCommentList = sharedDream.commentList;
  return (
    <div className="gap-y-lg flex min-h-0 flex-1 flex-col bg-black/30">
      <HeaderBar />
      <SharedDreamContent dream={sharedDream} />
      <BottomSheetLayout>
        <CommentSection initialCommentList={initialCommentList} />
      </BottomSheetLayout>
    </div>
  );
}
