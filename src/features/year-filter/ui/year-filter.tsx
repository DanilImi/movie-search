import { SelectFilter } from "../../../entities/select-filter";
import { years } from "../utils/years";

export const YearFilter = () => {
  return (
    <SelectFilter
      label="Release year"
      placeholder="Select release year"
      data={years()}
      allowDeselect
    />
  );
};
