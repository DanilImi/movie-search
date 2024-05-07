import { FiltersSection } from "../../widgets/filters/ui/filters-section";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { MainTitle } from "../../shared/ui/main-title/main-title";
import { CardMovie } from "./components/card-movie/card-movie";

export const MoviesPage = () => {
  return (
    <MainContainer size="md">
      <MainTitle>Movies</MainTitle>
      <FiltersSection />
      <CardMovie />
    </MainContainer>
  );
};
