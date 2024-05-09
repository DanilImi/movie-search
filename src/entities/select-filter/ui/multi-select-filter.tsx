import { Dispatch, FC, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { MultiSelect } from "@mantine/core";
import classes from "../styles/select.module.css";
import classesMultiSelect from "../styles/multi-select-filter.module.css";
import classesScrollbar from "../styles/scrollbar.module.css";
import { CheckMark } from "./check-mark";
import { SelectDataType } from "../../../shared/type/type";
import { AppDispatch } from "../../../app";
import {
  getMovies,
  setFilter,
} from "../../../app/store/get-movie/get-movies-slice";

interface MultiSelectFilterProps {
  label: string;
  placeholder: string;
  data: SelectDataType[];
  valueInput: string[];
  filterName: string;
  setValueInput: Dispatch<SetStateAction<string[]>>;
}

export const MultiSelectFilter: FC<MultiSelectFilterProps> = ({
  label,
  placeholder,
  data,
  valueInput,
  filterName,
  setValueInput,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  return (
    <MultiSelect
      classNames={{
        ...classes,
        ...classesMultiSelect,
        section: `${classes.section} ${
          isOpenDropdown ? classes.isOpenDropdown : ""
        }`,
      }}
      placeholder={!valueInput?.length ? placeholder : ""}
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
      onChange={(value) => {
        setValueInput(value);
        dispatch(setFilter({ filterName: filterName, value: value }));
        dispatch(getMovies());
      }}
    />
  );
};
