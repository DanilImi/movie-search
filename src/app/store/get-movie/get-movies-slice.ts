import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Movie } from "../../../shared/type/type";

interface Filters {
  with_genres: string[];
  primary_release_year: string;
  vote_averageLte: string;
  vote_averageGte: string;
  sort_by: string;
}

interface getMoviesState {
  movies: Movie[];
  filters: Filters;
  page: number;
}

const initialState: getMoviesState = {
  movies: [],
  filters: {
    with_genres: [],
    primary_release_year: "",
    vote_averageLte: "",
    vote_averageGte: "",
    sort_by: "popularity.desc",
  },
  page: 1,
};

interface ActionFilters {
  filterName: keyof typeof initialState.filters;
  value: string & string[];
}

const getMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<ActionFilters>) {
      const { filterName, value } = action.payload;
      state.filters[filterName] = value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (args, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const {
      with_genres,
      primary_release_year,
      vote_averageLte,
      vote_averageGte,
      sort_by,
    } = state.movies.filters;
    const { page } = state.movies;

    const genres =
      with_genres.length > 1 ? with_genres.join(",") : with_genres[0] ?? "";

    const response = await fetch(
      `/api/get-movies?with_genres=${genres}&primary_release_year=${primary_release_year}&vote_averageLte=${vote_averageLte}&vote_averageGte=${vote_averageGte}&sort_by=${sort_by}&page=${page}`
    );
    const movies = await response.json();

    return movies;
  }
);

export const { setFilter } = getMoviesSlice.actions;

export default getMoviesSlice.reducer;
