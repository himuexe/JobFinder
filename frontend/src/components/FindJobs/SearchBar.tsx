import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [salary, setSalary] = useState<[number, number]>([1, 100]);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-4">
        {dropdownData.map((item, index) => (
          <div key={index} className="flex-1">
            <MultiInput {...item} />
            {index < dropdownData.length - 1 && (
              <Divider
                orientation="vertical"
                className="hidden md:block opacity-20"
              />
            )}
          </div>
        ))}
        
        <div className="flex-1 px-2">
          <div className="flex justify-between mb-4 text-sm text-mine-shaft-200">
            <span>Salary Range</span>
            <span>₹{salary[0]} - ₹{salary[1]} LPA</span>
          </div>
          
          <RangeSlider
            color="clairt.4"
            size="sm"
            value={salary}
            onChange={setSalary}
            min={1}
            max={100}
            step={1}
            marks={[
              { value: 1, label: '1L' },
              { value: 50, label: '50L' },
              { value: 100, label: '1Cr' }
            ]}
            labelTransitionProps={{
              transition: 'slide-up',
              duration: 150,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;