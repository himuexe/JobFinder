import { useState } from "react";
import fields from "../../data/Profile";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [checked, setChecked] = useState(false);
  const [desc, setDesc] = useState(props.experience.description);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add ? "Add" : "Edit"} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        withAsterisk
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        label="Summary"
        placeholder="Enter Summary"
        autosize
        minRows={3}
        maxRows={4}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={endDate || undefined}
          label="Start Date"
          placeholder="Enter Start Date"
          value={startDate}
          onChange={setStartDate}
        />
        <MonthPickerInput
          disabled={checked}
          withAsterisk
          minDate={startDate || undefined}
          maxDate={new Date()}
          label="End Date"
          placeholder="Enter End Date"
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <Checkbox
        autoContrast
        label="Currently Working Here"
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <div className="flex gap-5">
              <Button onClick={() => props.setEdit(false)} color="clairt.4" variant="outline">Save</Button>
              <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
            </div>
    </div>
  );
};

export default ExpInput;
