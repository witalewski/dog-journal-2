import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import upsertWalk from "../actions/upsert-walk";
import SubmitButton from "./form/submit-button";
import { formatDate } from "date-fns";
import { Entry } from "@prisma/client";

export default function WalkUpsertForm({ walk }: { walk?: Entry }) {
  const defaultDate = walk ? new Date(walk.date) : new Date();
  return (
    <form
      action={upsertWalk.bind(null, walk?.id)}
      className="flex flex-col gap-2"
    >
      <div className="flex gap-2">
        <Input
          type="date"
          name="date"
          defaultValue={formatDate(defaultDate, "yyyy-MM-dd")}
        />
        <Input
          type="time"
          name="time"
          defaultValue={formatDate(defaultDate, "HH:mm")}
        />
      </div>
      <Select name="rating" defaultValue={walk?.rating ?? "green"}>
        <SelectTrigger>
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="green">Green</SelectItem>
          <SelectItem value="yellow">Yellow</SelectItem>
          <SelectItem value="red">Red</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="text"
        name="city"
        placeholder="City"
        defaultValue={walk?.city}
      />
      <Input
        type="text"
        name="location"
        placeholder="Location"
        defaultValue={walk?.location}
      />
      <Input
        type="text"
        name="person"
        placeholder="Person"
        defaultValue={walk?.person}
      />
      <Input
        type="number"
        name="lengthMinutes"
        placeholder="Length in minutes"
        defaultValue={walk?.lengthMinutes}
      />
      <Input
        type="text"
        name="weather"
        placeholder="Weather"
        defaultValue={walk?.weather}
      />
      <Input
        type="text"
        name="behavior"
        placeholder="Behavior"
        defaultValue={walk?.behavior}
      />
      <Textarea name="notes" placeholder="Notes" defaultValue={walk?.notes} />
      <SubmitButton label={walk ? "Save Walk" : "Add Walk"} />
    </form>
  );
}
