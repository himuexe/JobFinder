import { Divider, Input, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../../data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex flex-col md:flex-row gap-6 py-8">
      <div className="flex items-center flex-1">
        <div className="text-clairt-400 bg-mine-shaft-900 rounded-full p-1 mr-2">
          <IconUserCircle size={20} />
        </div>
        <Input
          className="[&_input]:!placeholder:text-mine-shaft-300"
          variant="unstyled"
          placeholder="Search by name"
        />
      </div>
      {searchFields.map((item, index) => (
        <div key={index} className="flex-1">
          <MultiInput {...item} />
          {index < searchFields.length - 1 && (
            <Divider
              mr="xs"
              size="xs"
              orientation="vertical"
              className="hidden md:block"
            />
          )}
        </div>
      ))}
      <div className="flex-1 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          color="clairt.4"
          size="xs"
          value={value}
          labelTransitionProps={{
            transition: "skew-down",
            duration: 150,
            timingFunction: "linear",
          }}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;