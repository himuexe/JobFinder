import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex flex-col md:flex-row px-5 py-8 gap-4 md:gap-0">
      {dropdownData.map((item, index) => (
        <div key={index} className="w-full md:w-1/5">
          <MultiInput {...item} />
          {index < dropdownData.length - 1 && (
            <Divider mr="xs" size="xs" orientation="vertical" className="hidden md:block" />
          )}
        </div>
      ))}
      <div className="w-full md:w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex text-sm justify-between">
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider
          color="clairt.4"
          size="xs"
          value={value}
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default SearchBar;