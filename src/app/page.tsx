import { Button } from "@/components/ui/button";
import { walksPath } from "@/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Button asChild>
        <Link href={walksPath()}>Go to Walks</Link>
      </Button>
    </div>
  );
}
