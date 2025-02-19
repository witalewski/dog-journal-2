import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import type getWalks from "../queries/get-walks";
import { walkPath } from "@/paths";

export default function WalksTable({
  walks,
}: {
  walks: Awaited<ReturnType<typeof getWalks>>;
}) {
  return (
    <Table>
      <TableCaption>Recent walks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>City</TableHead>
          <TableHead>Person</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Weather</TableHead>
          <TableHead>Behavior</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {walks.map((walk) => (
          <TableRow key={walk.id}>
            <TableCell>
              <RatingDot rating={walk.rating} />
            </TableCell>
            <TableCell>{walk.city}</TableCell>
            <TableCell>{walk.person}</TableCell>
            <TableCell>{walk.date.toISOString()}</TableCell>
            <TableCell>{walk.lengthMinutes}</TableCell>
            <TableCell>{walk.location}</TableCell>
            <TableCell>{walk.weather}</TableCell>
            <TableCell>{walk.behavior}</TableCell>
            <TableCell>{walk.notes}</TableCell>
            <TableCell>
              <Button asChild variant="outline">
                <Link href={walkPath(walk.id)}>View Details</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
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
