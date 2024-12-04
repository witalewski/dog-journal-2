import { walks } from "@/data/walks";

export default async function WalkPage({
  params,
}: {
  params: Promise<{ walkId: string }>;
}) {
  const { walkId } = await params;
  const parsedWalkId = parseInt(walkId, 10);

  const walk = walks.find((walk) => walk.id === parsedWalkId);

  if (!walk) {
    return <div>Walk not found.</div>;
  }

  return (
    <div className="px-4 py-4">
      <div>Walk details: </div>
      <pre>{JSON.stringify(walk, null, 2)}</pre>
    </div>
  );
}
