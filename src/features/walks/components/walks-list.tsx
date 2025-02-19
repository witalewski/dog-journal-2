import CardCompact from "@/components/card-compact";
import WalksCards from "@/features/walks/components/walks-cards";
import WalksTable from "@/features/walks/components/walks-table";
import getWalks from "@/features/walks/queries/get-walks";
import WalkUpsertForm from "./walk-upsert-form";

export default async function WalksList() {
  const walks = await getWalks();
  return (
    <div className="flex flex-col gap-4 px-4 py-4">
      <h1>Walks</h1>
      <CardCompact
        className="w-full max-w-[420px] self-center"
        title="Add Walk"
        description="A new walk will be recorder"
        content={<WalkUpsertForm />}
      />
      <div className="hidden lg:block">
        <WalksTable walks={walks} />
      </div>
      <div className="lg:hidden">
        <WalksCards walks={walks} />
      </div>
    </div>
  );
}
