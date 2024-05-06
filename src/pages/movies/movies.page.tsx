import { AppShell } from "@mantine/core";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { MainTitle } from "../../shared/ui/main-title/main-title";
import { MultiSelectFilter } from "./components/multi-select-filter/multi-select-filter";
import { useEffect, useState } from "react";
import { getGenres } from "./api/get-genres";
import { SelectFilter } from "./components/select-filter/select-filter";
import { years } from "./utils/years";
import { sortBy } from "./utils/sort-by";
import classes from "./filter-section.module.css";
import { InputRating } from "./components/input-rating/input-rating";
import { ResetFiltersBtn } from "./components/reset-filters-btn/reset-filters-btn";

export const MoviesPage = () => {
  const [genres, setGenres] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      const genres = await getGenres();
      setGenres(genres);
    })();
  }, []);
  return (
    <MainContainer size="md">
      <MainTitle>Movies</MainTitle>
      <AppShell.Section className={classes.section}>
        <MultiSelectFilter
          label="Genres"
          placeholder="Select genre"
          data={genres}
        />
        <SelectFilter
          label="Release year"
          placeholder="Select release year"
          data={years()}
          allowDeselect
        />
        <div className={classes.rating}>
          <InputRating placeholder="From" label="Ratings" />
          <InputRating placeholder="To" />
        </div>
        <ResetFiltersBtn />
        <SelectFilter
          label="Sort by"
          data={sortBy}
          allowDeselect={false}
          defaultValue={sortBy[0]}
          marginLeft="auto"
        />
      </AppShell.Section>
    </MainContainer>
  );
};
