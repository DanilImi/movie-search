import { FC } from "react";
import { AppShell } from "@mantine/core";
import classes from "./filters-section.module.css";
import { GenresFilter } from "../../../features/genres-filter";
import { YearFilter } from "../../../features/year-filter";
import { RatingFilter } from "../../../features/rating-filter";
import { ResetFiltersBtn } from "../../../features/reset-filter";
import { SortByFilter } from "../../../features/sort-by-filter/ui/sort-by-filter";

export const FiltersSection: FC = () => {
  return (
    <AppShell.Section className={classes.section}>
      <GenresFilter />
      <YearFilter />
      <RatingFilter />
      <ResetFiltersBtn />
      <SortByFilter />
    </AppShell.Section>
  );
};
