import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { walks } from "@/data/walks";
import { Button } from "./ui/button";
import Link from "next/link";

export default function WalksList() {
  return (
    <div className="flex flex-col gap-2">
      {walks.map((walk) => (
        <Card key={walk.id}>
          <CardHeader>
            <CardTitle>{walk.date}</CardTitle>
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
