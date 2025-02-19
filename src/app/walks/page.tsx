import CardCompact from "@/components/card-compact";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import WalkUpsertForm from "@/features/walks/components/walk-upsert-form";
import WalksList from "@/features/walks/components/walks-list";
import { newWalkPath } from "@/paths";
import Link from "next/link";

export const revalidate = 30;

export default function WalksPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Walks" description="Jak się ma ten nasz piesek?">
        <div className="hidden justify-center lg:flex">
          <Button asChild>
            <Link href={newWalkPath()}>Add new Walk</Link>
          </Button>
        </div>
      </Heading>
      <CardCompact
        className="w-full max-w-[560px] self-center lg:hidden"
        title="Add Walk"
        description="A new walk will be recorded"
        content={<WalkUpsertForm />}
      />
      <WalksList />
    </div>
  );
}
