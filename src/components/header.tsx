import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="border-b px-4 py-4">
      <Button asChild variant="ghost">
        <Link href="/">Dog Journal 🐕</Link>
      </Button>
    </nav>
  );
}
