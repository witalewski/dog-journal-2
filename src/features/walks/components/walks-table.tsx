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
import { cn } from "@/lib/utils";
import { editWalkPath, walkPath } from "@/paths";
import { formatDate } from "date-fns";
import { pl } from "date-fns/locale";
import { MenuIcon } from "lucide-react";
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
          <TableHead>No.</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Person</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Weather</TableHead>
          <TableHead>Behavior</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {walks.map((walk, i, arr) => (
          <TableRow
            key={walk.id}
            className={cn({
              "bg-red-500/[.15] hover:bg-red-500/[.30]": walk.rating === "red",
              "bg-yellow-500/[.15] hover:bg-yellow-500/[.30]":
                walk.rating === "yellow",
              "bg-green-500/[.15] hover:bg-green-500/[.30]":
                walk.rating === "green",
            })}
          >
            <TableCell>{arr.length - i}</TableCell>
            <TableCell>{walk.city}</TableCell>
            <TableCell>{walk.person}</TableCell>
            <TableCell>
              {formatDate(walk.date, "EEEE, do MMMM yyyy", {
                locale: pl,
              })}
            </TableCell>
            <TableCell>
              {formatDate(walk.date, "H:mm", {
                locale: pl,
              })}
            </TableCell>
            <TableCell>{walk.lengthMinutes} minutes</TableCell>
            <TableCell>{walk.location}</TableCell>
            <TableCell>{walk.weather}</TableCell>
            <TableCell>{walk.behavior}</TableCell>
            <TableCell>{walk.notes}</TableCell>
            <TableCell className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-none" variant="outline">
                    <MenuIcon />
                  </Button>
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
