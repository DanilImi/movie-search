import { useEffect, useState } from "react";
import { getGenres } from "../api/get-genres";
import { SelectDataType } from "../../../shared/type/type";
import { MultiSelectFilter } from "../../../entities/select-filter";

export const GenresFilter = () => {
  const [valueInput, setValueInput] = useState<string[]>([]);
  const [genres, setGenres] = useState<SelectDataType[]>([]);

  useEffect(() => {
    (async () => {
      const genres = await getGenres();
      setGenres(genres);
    })();
  }, []);

  return (
    <MultiSelectFilter
      label="Genres"
      placeholder="Select genre"
      data={genres}
      valueInput={valueInput}
      setValueInput={setValueInput}
      filterName="with_genres"
    />
  );
};
