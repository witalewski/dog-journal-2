import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { walks } from "@/data/walks";

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
        </Card>
      ))}
    </div>
  );
}
