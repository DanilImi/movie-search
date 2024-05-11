export interface SelectDataType {
  value: string;
  label: string;
}

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[] | string[];
}

export interface MoviesWithGenresLabel extends Movie {
  genres_label: string[];
}
