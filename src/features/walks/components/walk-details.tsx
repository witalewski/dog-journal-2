import getWalk from "@/features/walks/queries/get-walk";

export default async function WalkDetails({ walkId }: { walkId: number }) {
  const walk = await getWalk(walkId);

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
