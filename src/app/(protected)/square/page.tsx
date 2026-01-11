// components
import SharedDreamList from "./_components/SharedDreamList";

// services
import { getSharedDreamListServer } from "@/services/server";

export default async function SharedDreamFeedPage() {
  const res = await getSharedDreamListServer();
  const initialDreamList = res.data;

  return (
    <div className="hide-scrollbar flex-1 overflow-y-scroll bg-black/10 px-lg pt-2xl">
      <SharedDreamList initialData={initialDreamList} />
    </div>
  );
}
