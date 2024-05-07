import { FC } from "react";
import { SelectFilter } from "../../../entities/select-filter";
import { sortBy } from "../utils/sort-by";

export const SortByFilter: FC = () => {
  return (
    <SelectFilter
      label="Sort by"
      data={sortBy}
      allowDeselect={false}
      defaultValue={sortBy[0]}
      marginLeft="auto"
    />
  );
};
