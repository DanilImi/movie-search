import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Select } from "@mantine/core";
import { AppDispatch } from "../../../app";
import classes from "../styles/select.module.css";
import classesSelect from "../styles/select-filter.module.css";
import classesScrollbar from "../styles/scrollbar.module.css";
import { CheckMark } from "./check-mark";
import { SelectDataType } from "../../../shared/type/type";
import {
  getMovies,
  setFilter,
} from "../../../app/store/get-movie/get-movies-slice";

interface SelectFilterProps {
  label: string;
  data: string[] | SelectDataType[];
  filterName: string;
  allowDeselect: boolean;
  defaultSearchValue?: string;
  placeholder?: string;
  marginLeft?: string;
}

export const SelectFilter: FC<SelectFilterProps> = ({
  placeholder,
  label,
  data,
  allowDeselect,
  defaultSearchValue,
  marginLeft,
  filterName,
}) => {
  const dispatch = useDispatch<AppDispatch>();
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
      defaultSearchValue={defaultSearchValue}
      allowDeselect={allowDeselect}
      withCheckIcon={false}
      size="md"
      radius="md"
      label={label}
      data={data}
      maxDropdownHeight={224}
      onChange={(value) => {
        dispatch(setFilter({ filterName: filterName, value: value }));
        dispatch(getMovies());
      }}
    />
  );
};
