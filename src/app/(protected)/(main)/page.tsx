// component
import BottomSheetLayout from "@/components/layout/BottomSheetLayout";
import UserGreeting from "./_components/UserGreeting";
import MainClientComponent from "./_components/MainClientComponent";

// services
import { getMyProfileServer, getMyDreamListServer } from "@/services/server";

export default async function MainPage() {
  // 유저 정보 가져오기
  const profileRes = await getMyProfileServer();
  const profile = profileRes.data;

  // 꿈 목록 가져오기
  const dreamListRes = await getMyDreamListServer(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
  );
  const initialDreamList = dreamListRes.data;
  return (
    <>
      <UserGreeting profile={profile} />
      <BottomSheetLayout>
        <MainClientComponent initialDreamList={initialDreamList} />
      </BottomSheetLayout>
    </>
  );
}
