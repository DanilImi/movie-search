import { FC } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "@mantine/form";
import { AppDispatch, getMovies } from "../../../app";
import classes from "./filters-section.module.css";
import { GenresFilter } from "../../../features/genres-filter";
import { YearFilter } from "../../../features/year-filter";
import { RatingFilter } from "../../../features/rating-filter";
import { ResetFiltersBtn } from "../../../features/reset-filter";
import { SortByFilter } from "../../../features/sort-by-filter";

export const FiltersSection: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { getInputProps, key } = useForm({
    mode: "uncontrolled",
    initialValues: {
      with_genres: [] as string[],
      primary_release_year: "",
      vote_averageLte: "",
      vote_averageGte: "",
      sort_by: "popularity.desc",
    },
    onValuesChange: (values) => {
      dispatch(getMovies(values));
    },
  });

  const ratingFrom = {
    key: key("vote_averageGte"),
    getInputProps: getInputProps("vote_averageGte"),
  };
  const ratingTo = {
    key: key("vote_averageLte"),
    getInputProps: getInputProps("vote_averageLte"),
  };

  return (
    <form className={classes.section}>
      <GenresFilter
        key={key("with_genres")}
        {...getInputProps("with_genres")}
      />
      <YearFilter
        key={key("primary_release_year")}
        {...getInputProps("primary_release_year")}
      />
      <RatingFilter ratingFrom={ratingFrom} ratingTo={ratingTo} />
      <ResetFiltersBtn />
      <SortByFilter key={key("sort_by")} {...getInputProps("sort_by")} />
    </form>
  );
};
