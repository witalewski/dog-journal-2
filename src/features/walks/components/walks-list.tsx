import WalksCards from "@/features/walks/components/walks-cards";
import WalksTable from "@/features/walks/components/walks-table";
import getWalks from "@/features/walks/queries/get-walks";
import AddWalk from "./add-walk";

export default async function WalksList() {
  const walks = await getWalks();
  return (
    <div className="flex flex-col gap-4 px-4 py-4">
      <h1>Walks</h1>
      <AddWalk />
      <div className="hidden lg:block">
        <WalksTable walks={walks} />
      </div>
      <div className="lg:hidden">
        <WalksCards walks={walks} />
      </div>
    </div>
  );
}
