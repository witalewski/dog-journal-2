import Placeholder from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { walksPath } from "@/paths";
import Link from "next/link";

export default function NotFouond() {
  return (
    <Placeholder
      label="Walk not found"
      button={
        <Button asChild variant="outline">
          <Link href={walksPath()}>Back to Walks</Link>
        </Button>
      }
    />
  );
}
