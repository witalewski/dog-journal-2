import { LoaderCircleIcon } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex flex-1 items-center justify-center self-center">
      <LoaderCircleIcon className="animate-spin" size={64} />
    </div>
  );
}
