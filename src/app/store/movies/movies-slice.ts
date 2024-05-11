import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Movie, SelectDataType } from "../../../shared/type/type";

interface Filters {
  with_genres: string[];
  primary_release_year: string;
  vote_averageLte: string;
  vote_averageGte: string;
  sort_by: string;
}

interface getMoviesState {
  genres: SelectDataType[];
  movies: Movie[];
  page: number;
}

const initialState: getMoviesState = {
  genres: [],
  movies: [],
  page: 1,
};

const getMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setGenres(state, action: PayloadAction<SelectDataType[]>) {
      state.genres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const getMovies = createAsyncThunk<
  Movie[],
  Filters,
  { state: RootState }
>("movies/getMovies", async (args, thunkAPI) => {
  const state = thunkAPI.getState();
  const {
    with_genres,
    primary_release_year,
    vote_averageLte,
    vote_averageGte,
    sort_by,
  } = args;
  const { page } = state.movies;

  const genres =
    with_genres.length > 1 ? with_genres.join(",") : with_genres[0] ?? "";

  const response = await fetch(
    `/api/get-movies?with_genres=${genres}&primary_release_year=${primary_release_year}&vote_averageLte=${vote_averageLte}&vote_averageGte=${vote_averageGte}&sort_by=${sort_by}&page=${page}`
  );
  const movies = await response.json();

  return movies;
});

export const { setGenres } = getMoviesSlice.actions;

export default getMoviesSlice.reducer;
