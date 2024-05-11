import { FiltersSection } from "../../widgets/filters/ui/filters-section";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { MainTitle } from "../../shared/ui/main-title/main-title";
import { MoviesList } from "../../features/movies-list";

export const MoviesPage = () => {
  return (
    <MainContainer size="md">
      <MainTitle>Movies</MainTitle>
      <FiltersSection />
      <MoviesList />
    </MainContainer>
  );
};
