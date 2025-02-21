import WalksCards from "@/features/walks/components/walks-cards";
import WalksTable from "@/features/walks/components/walks-table";
import getWalks from "@/features/walks/queries/get-walks";

export default async function WalksList() {
  const walks = await getWalks();
  return (
    <>
      <div className="hidden lg:block">
        <WalksTable walks={walks} />
      </div>
      <div className="lg:hidden">
        <WalksCards walks={walks} />
      </div>
    </>
  );
}
