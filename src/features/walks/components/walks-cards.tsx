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
import { walkPath } from "@/paths";

export default function WalksCards({
  walks,
}: {
  walks: Awaited<ReturnType<typeof getWalks>>;
}) {
  return (
    <div className="flex flex-col gap-2">
      {walks.map((walk) => (
        <Card key={walk.id}>
          <CardHeader>
            <CardTitle>
              <RatingDot rating={walk.rating} />
              {walk.date.toLocaleString()}
            </CardTitle>
            <CardDescription>
              {walk.city} - {walk.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{walk.person}</p>
            <p>{walk.lengthMinutes} minutes</p>
            <p>{walk.weather}</p>
            <p>{walk.behavior}</p>
            <p>{walk.notes}</p>
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
