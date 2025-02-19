import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { editWalkPath, walkPath } from "@/paths";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import type getWalks from "../queries/get-walks";

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
          <TableHead className="max-w-min flex-shrink"></TableHead>
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
            <TableCell>{walk.date.toLocaleString()}</TableCell>
            <TableCell>{walk.lengthMinutes}</TableCell>
            <TableCell>{walk.location}</TableCell>
            <TableCell>{walk.weather}</TableCell>
            <TableCell>{walk.behavior}</TableCell>
            <TableCell>{walk.notes}</TableCell>
            <TableCell className="flex max-w-min flex-shrink gap-2">
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
