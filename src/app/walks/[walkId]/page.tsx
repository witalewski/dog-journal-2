import getWalk from "@/features/walks/queries/get-walk";

export default async function WalkPage({
  params,
}: {
  params: Promise<{ walkId: string }>;
}) {
  const { walkId } = await params;
  const parsedWalkId = parseInt(walkId, 10);

  const walk = await getWalk(parsedWalkId);

  if (!walk) {
    return <div className="px-4 py-4">Walk not found.</div>;
  }

  return (
    <div className="px-4 py-4">
      <div>Walk details: </div>
      <pre>{JSON.stringify(walk, null, 2)}</pre>
    </div>
  );
}
