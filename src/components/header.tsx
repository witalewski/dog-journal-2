import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-lg">
      <Button asChild variant="ghost">
        <Link className="font-bold" href="/">
          Dog Journal 🐕
        </Link>
      </Button>
      <Button asChild variant="ghost">
        <Link href="/walks">Walks</Link>
      </Button>
    </nav>
  );
}
