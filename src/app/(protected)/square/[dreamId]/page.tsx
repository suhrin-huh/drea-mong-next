// components
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import HeaderBar from "@/components/bar/HeaderBar";
import SquareContent from "./_components/SqaureContent";
import SquareComment from "./_components/SquareComment";

// mock
import { dreamMock } from "@/mocks/dream.mock";
import { commentsMock } from "@/mocks/comment.mock";

export default function SquareDetail() {
  return (
    <div className="flex h-full flex-col">
      <div className="p-lg h-fit">
        <HeaderBar />
        <SquareContent dream={dreamMock} />
      </div>
      <BottomSheetLayout>
        <SquareComment comments={commentsMock} />
      </BottomSheetLayout>
    </div>
  );
}
