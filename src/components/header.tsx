"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { MoonIcon, SunIcon } from "lucide-react";
import { homePath, walksPath } from "@/paths";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      suppressHydrationWarning
      className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-lg"
    >
      <div>
        <Button asChild variant="ghost">
          <Link className="font-bold" href={homePath()}>
            Dog Journal 🐕
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href={walksPath()}>Walks</Link>
        </Button>
      </div>
      <Switch
        suppressHydrationWarning
        className="self"
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        uncheckedIcon={<MoonIcon />}
        checkedIcon={<SunIcon />}
      />
    </nav>
  );
}
