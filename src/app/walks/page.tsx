import WalksList from "@/features/walks/components/walks-list";

export default function WalksPage() {
  // @ts-expect-error Server Component
  return <WalksList />;
}
