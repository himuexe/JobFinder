import { useState } from 'react';
import { ActionIcon, Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const sortOptions = [
  'Relevance',
  'Most Recent',
  'Salary (Low to High)',
  'Salary (High to Low)'
];

const Sort = () => {
  const [selected, setSelected] = useState('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  return (
    <Combobox
      store={combobox}
      width={200}
      position="bottom-end"
      onOptionSubmit={(value) => {
        setSelected(value);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <button
          onClick={() => combobox.toggleDropdown()}
          className="flex items-center gap-2 px-4 py-2 border border-clairt-400 rounded-xl hover:bg-mine-shaft-900 transition-colors"
        >
          <span className="text-sm text-mine-shaft-100">{selected}</span>
          <ActionIcon 
            color="clairt.4" 
            variant="transparent"
            aria-label="Sort options"
          >
            <IconAdjustments className="h-5 w-5" />
          </ActionIcon>
        </button>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {sortOptions.map((option) => (
            <Combobox.Option 
              key={option} 
              value={option}
              className="text-sm py-2"
            >
              {option}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default Sort;