import CardCompact from "@/components/card-compact";
import Heading from "@/components/heading";
import WalkUpsertForm from "@/features/walks/components/walk-upsert-form";
import WalksList from "@/features/walks/components/walks-list";

export const revalidate = 30;

export default function WalksPage() {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Walks" description="Jak się ma ten nasz piesek?" />
      <CardCompact
        className="w-full max-w-[420px] self-center"
        title="Add Walk"
        description="A new walk will be recorded"
        content={<WalkUpsertForm />}
      />
      <WalksList />
    </div>
  );
}
