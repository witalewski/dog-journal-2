import { Entry } from "@prisma/client";

export default async function WalkDetails({ walk }: { walk: Entry }) {
  return (
    <div className="px-4 py-4">
      <div>Walk details: </div>
      <pre>{JSON.stringify(walk, null, 2)}</pre>
    </div>
  );
}
