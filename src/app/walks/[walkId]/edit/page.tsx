import CardCompact from "@/components/card-compact";
import WalkUpsertForm from "@/features/walks/components/walk-upsert-form";
import getWalk from "@/features/walks/queries/get-walk";
import { notFound } from "next/navigation";

export default async function EditWalkPage({
  params,
}: {
  params: Promise<{ walkId: string }>;
}) {
  const { walkId } = await params;
  const parsedWalkId = parseInt(walkId, 10);

  const walk = await getWalk(parsedWalkId);

  if (!walk) {
    return notFound();
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <CardCompact
        className="w-full max-w-[560px] self-center"
        title="Edit Walk"
        description="You can make changes to the walk."
        content={<WalkUpsertForm walk={walk} />}
      />
    </div>
  );
}
