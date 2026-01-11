// components
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import HeaderBar from "@/components/bar/HeaderBar";
import SharedDreamContent from "./_components/SharedDreamContent";
import CommentSection from "./_components/CommentSection";

// services
import { getSharedDreamDetailServer } from "@/services/server";

// types
import { DreamId } from "@/types";

interface SquareDetailProps {
  params: Promise<{ dreamId: DreamId }>;
}

export default async function SquareDetail({ params }: SquareDetailProps) {
  const { dreamId } = await params;
  const sharedDreamRes = await getSharedDreamDetailServer(dreamId);
  const sharedDream = sharedDreamRes.data;
  const initialCommentList = sharedDream.commentList;
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-y-lg bg-black/30">
      <HeaderBar />
      <SharedDreamContent dream={sharedDream} />
      <BottomSheetLayout>
        <CommentSection initialCommentList={initialCommentList} />
      </BottomSheetLayout>
    </div>
  );
}
