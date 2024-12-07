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
            <CardTitle>{walk.date.toISOString()}</CardTitle>
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
              <Link href={`/walks/${walk.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
