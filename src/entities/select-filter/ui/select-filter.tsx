import { FC, useState } from "react";
import { Select } from "@mantine/core";
import classes from "../styles/select.module.css";
import classesSelect from "../styles/select-filter.module.css";
import classesScrollbar from "../styles/scrollbar.module.css";
import { CheckMark } from "./check-mark";

interface SelectFilterProps {
  label: string;
  data: string[];
  allowDeselect: boolean;
  defaultValue?: string;
  placeholder?: string;
  marginLeft?: string;
}

export const SelectFilter: FC<SelectFilterProps> = ({
  placeholder,
  label,
  data,
  allowDeselect,
  defaultValue,
  marginLeft,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <Select
      style={{ marginLeft: marginLeft }}
      classNames={{
        ...classes,
        input: `${classes.input} ${classesSelect.inputPlaceholder}`,
        section: `${classes.section} ${
          isOpenDropdown ? classes.isOpenDropdown : ""
        }`,
      }}
      placeholder={placeholder}
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
      defaultValue={defaultValue}
      allowDeselect={allowDeselect}
      withCheckIcon={false}
      size="md"
      radius="md"
      label={label}
      data={data}
      maxDropdownHeight={224}
    />
  );
};
