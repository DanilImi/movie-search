import { Dispatch, FC, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { NumberInput } from "@mantine/core";
import { AppDispatch } from "../../../app";
import classes from "../styles/input-rating.module.css";
import { ChevronRating } from "./chevron-rating/chevron-rating";
import {
  getMovies,
  setFilter,
} from "../../../app/store/get-movie/get-movies-slice";

interface InputRatingProps {
  placeholder: string;
  label?: string;
  filterName: string;
}

export const InputRating: FC<InputRatingProps> = ({
  placeholder,
  label,
  filterName,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <NumberInput
      classNames={classes}
      rightSection={<ChevronRating />}
      size="md"
      radius="md"
      max={10}
      min={0}
      maxLength={10}
      placeholder={placeholder}
      label={label}
      onChange={(value) => {
        dispatch(setFilter({ filterName: filterName, value: value }));
        dispatch(getMovies());
      }}
    />
  );
};
