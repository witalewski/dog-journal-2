import WalkDetails from "@/features/walks/components/walk-details";
import getWalk from "@/features/walks/queries/get-walk";
import { notFound } from "next/navigation";

export default async function WalkPage({
  params,
}: {
  params: Promise<{ walkId: string }>;
}) {
  const { walkId } = await params;
  const parsedWalkId = parseInt(walkId, 10);

  const walk = await getWalk(parsedWalkId);

  if (!walk) {
    notFound();
  }

  return <WalkDetails walk={walk} />;
}
