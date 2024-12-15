import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import createWalk from "../actions/create-walk";

export default function AddWalk() {
  return (
    <Card>
      <form action={createWalk}>
        <CardHeader>Add Walk</CardHeader>
        <CardContent className="flex flex-col gap-2">
          <input
            type="hidden"
            name="date"
            defaultValue={new Date().toISOString()}
          />
          <select name="rating">
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
          </select>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="person" placeholder="Person" />
          <input
            type="number"
            name="lengthMinutes"
            placeholder="Length in minutes"
          />
          <input type="text" name="weather" placeholder="Weather" />
          <input type="text" name="behavior" placeholder="Behavior" />
          <textarea name="notes" placeholder="Notes" />
        </CardContent>
        <CardFooter>
          <Button>Add Walk</Button>
          <button type="submit">Add Walk</button>
        </CardFooter>
      </form>
    </Card>
  );
}
