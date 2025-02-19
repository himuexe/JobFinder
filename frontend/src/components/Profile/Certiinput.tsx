import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import fields from "../../data/Profile";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const Certiinput = (props: any) => {
  const select = fields;
  const [issueDate, setIssuetDate] = useState<Date | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" placeholder="Enter Title" withAsterisk />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          withAsterisk
          maxDate={new Date()}
          label="Issue Date"
          placeholder="Enter Issue Date"
          value={issueDate}
          onChange={setIssuetDate}
        />
        <TextInput label="Certificate ID" placeholder="Enter Certificate ID" withAsterisk />
      </div>
      <div className="flex gap-5">
        <Button
          onClick={() => props.setEdit(true)}
          color="clairt.4"
          variant="outline"
        >
          Edit
        </Button>
        <Button color="red.8" variant="light">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Certiinput;
