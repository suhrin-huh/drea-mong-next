// API 연동
import { getSharedDreamListServer } from "@/lib/api/queries";

// components
import SharedDreamCard from "./_components/SharedDreamCard";

export default async function SharedDreamFeedPage() {
  const sharedDreamListRes = await getSharedDreamListServer();
  const sharedDreamList = sharedDreamListRes.data;

  return (
    <div className="hide-scrollbar px-lg pt-2xl gap-sm grid flex-1 grid-cols-3 overflow-y-scroll bg-black/10">
      {sharedDreamList.map((dream) => (
        <SharedDreamCard dream={dream} key={dream.dreamId} />
      ))}
    </div>
  );
}
