"use client";

import { homePath, walksPath } from "@/paths";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav
      suppressHydrationWarning
      className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 py-4 backdrop-blur-lg"
    >
      <div>
        <Button asChild variant="ghost">
          <Link href={homePath()}>
            <h1 className="text-lg font-semibold">Dog Journal 🐕</h1>
          </Link>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Switch
          suppressHydrationWarning
          className="self"
          checked={resolvedTheme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          uncheckedIcon={<MoonIcon />}
          checkedIcon={<SunIcon />}
        />
        <Button asChild variant="secondary">
          <Link href={walksPath()}>Walks</Link>
        </Button>
      </div>
    </nav>
  );
}
