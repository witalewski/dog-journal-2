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

export default function WalkUpsertForm() {
  return (
    <form
      action={upsertWalk.bind(null, undefined)}
      className="flex flex-col gap-2"
    >
      <input
        type="hidden"
        name="date"
        defaultValue={new Date().toISOString()}
      />
      <Select name="rating">
        <SelectTrigger>
          <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="green">Green</SelectItem>
          <SelectItem value="yellow">Yellow</SelectItem>
          <SelectItem value="red">Red</SelectItem>
        </SelectContent>
      </Select>
      <Input type="text" name="city" placeholder="City" />
      <Input type="text" name="location" placeholder="Location" />
      <Input type="text" name="person" placeholder="Person" />
      <Input
        type="number"
        name="lengthMinutes"
        placeholder="Length in minutes"
      />
      <Input type="text" name="weather" placeholder="Weather" />
      <Input type="text" name="behavior" placeholder="Behavior" />
      <Textarea name="notes" placeholder="Notes" />
      <SubmitButton label="Add Walk" />
    </form>
  );
}
