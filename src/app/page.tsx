import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Button asChild>
        <Link href="/walks">Go to Walks</Link>
      </Button>
    </div>
  );
}
