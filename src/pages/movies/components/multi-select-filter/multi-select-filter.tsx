import { FC, useState } from "react";
import { MultiSelect } from "@mantine/core";
import classes from "../../select.module.css";
import classesMultiSelect from "./multi-select-filter.module.css";
import classesScrollbar from "../../scrollbar.module.css";
import { CheckMark } from "../../check-mark";

interface MultiSelectFilterProps {
  label: string;
  placeholder: string;
  data: string[];
}

export const MultiSelectFilter: FC<MultiSelectFilterProps> = ({
  label,
  placeholder,
  data,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  return (
    <MultiSelect
      classNames={{
        ...classes,
        ...classesMultiSelect,
        section: `${classes.section} ${
          isOpenDropdown ? classes.isOpenDropdown : ""
        }`,
      }}
      placeholder={!value.length ? placeholder : ""}
      scrollAreaProps={{
        classNames: classesScrollbar,
        type: "always",
      }}
      rightSection={
        <CheckMark
          stroke={
            isOpenDropdown
              ? "var(--mantine-color-purple-5)"
              : "var(--mantine-color-gray-4)"
          }
        />
      }
      onDropdownOpen={() => setIsOpenDropdown(true)}
      onDropdownClose={() => setIsOpenDropdown(false)}
      comboboxProps={{
        offset: 8,
      }}
      withCheckIcon={false}
      size="md"
      radius="md"
      label={label}
      data={data}
      maxDropdownHeight={224}
      onChange={setValue}
    />
  );
};
