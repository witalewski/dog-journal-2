import WalksList from "@/components/walks-list";
import WalksTable from "@/components/walks-table";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-4 py-4">
      <h1>Walks</h1>
      <div className="hidden lg:block">
        <WalksTable />
      </div>
      <div className="lg:hidden">
        <WalksList />
      </div>
    </div>
  );
}
