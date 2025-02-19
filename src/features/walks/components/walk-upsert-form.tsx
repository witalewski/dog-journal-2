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
      <SubmitButton label="Add Walk" />
    </form>
  );
}
