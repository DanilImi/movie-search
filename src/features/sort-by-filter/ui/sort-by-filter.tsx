import { FC } from "react";
import { sortBy } from "../utils/sort-by";
import { SelectFilter } from "../../../entities/select-filter";

export const SortByFilter: FC = () => {
  return (
    <SelectFilter
      label="Sort by"
      data={sortBy}
      allowDeselect={false}
      defaultSearchValue={sortBy[0].label}
      marginLeft="auto"
      filterName="sort_by"
    />
  );
};
