import { useEffect, useState } from "react";
import { MultiSelectFilter } from "../../../entities/select-filter";
import { getGenres } from "../api/get-genres";
import { Genre } from "../../../shared/type/type";

export const GenresFilter = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [valueInput, setValueInput] = useState<string[]>([]);

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
    />
  );
};
