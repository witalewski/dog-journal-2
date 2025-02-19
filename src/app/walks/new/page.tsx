import CardCompact from "@/components/card-compact";
import WalkUpsertForm from "@/features/walks/components/walk-upsert-form";

export default function NewWalkPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <CardCompact
        className="w-full max-w-[560px] self-center"
        title="Add Walk"
        description="A new walk will be recorded"
        content={<WalkUpsertForm />}
      />
    </div>
  );
}
