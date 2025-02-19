import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import type getWalks from "../queries/get-walks";
import { editWalkPath, walkPath } from "@/paths";
import {
  ClockIcon,
  CloudSunIcon,
  DogIcon,
  NotebookIcon,
  UserIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function WalksCards({
  walks,
}: {
  walks: Awaited<ReturnType<typeof getWalks>>;
}) {
  return (
    <div className="flex flex-col gap-8">
      {walks.map((walk) => (
        <Card key={walk.id} className="w-full max-w-[560px] self-center">
          <div className="flex justify-between">
            <CardHeader>
              <CardTitle>
                <RatingDot rating={walk.rating} />
                {walk.date.toLocaleString()}
              </CardTitle>
              <CardDescription>
                {[walk.city, walk.location].filter(Boolean).join(" - ")}
              </CardDescription>
            </CardHeader>
            <div className="pr-4 pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">...</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={walkPath(walk.id)}>View Details</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={editWalkPath(walk.id)}>Edit</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <CardContent className="flex flex-col gap-2">
            {walk.person && (
              <div className="flex items-center gap-2">
                <UserIcon /> {walk.person}
              </div>
            )}
            {walk.lengthMinutes && (
              <div className="flex items-center gap-2">
                <ClockIcon /> {walk.lengthMinutes} minutes
              </div>
            )}
            {walk.weather && (
              <div className="flex items-center gap-2">
                <CloudSunIcon /> {walk.weather}
              </div>
            )}
            {walk.behavior && (
              <div className="flex items-center gap-2">
                <DogIcon /> {walk.behavior}
              </div>
            )}
            {walk.notes && (
              <div className="flex items-center gap-2">
                <NotebookIcon /> {walk.notes}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href={walkPath(walk.id)}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function RatingDot({ rating }: { rating: string }) {
  switch (rating) {
    case "green":
      return <span style={{ color: "green" }}>🟢</span>;
    case "yellow":
      return <span style={{ color: "yellow" }}>🟡</span>;
    case "red":
      return <span style={{ color: "red" }}>🔴</span>;
    default:
      return <span style={{ color: "gray" }}>⚪️</span>;
  }
}
