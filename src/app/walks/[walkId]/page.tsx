import WalkDetails from "@/features/walks/components/walk-details";

export default async function WalkPage({
  params,
}: {
  params: Promise<{ walkId: string }>;
}) {
  const { walkId } = await params;
  const parsedWalkId = parseInt(walkId, 10);
  // @ts-expect-error Server Component
  return <WalkDetails walkId={parsedWalkId} />;
}
