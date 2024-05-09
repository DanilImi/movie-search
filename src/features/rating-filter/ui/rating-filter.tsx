import { FC } from "react";
import { InputRating } from "../../../entities/input-rating";
import classes from "../styles/rating-filter.module.css";

export const RatingFilter: FC = () => {
  return (
    <div className={classes.rating}>
      <InputRating
        placeholder="From"
        label="Ratings"
        filterName="vote_averageGte"
      />
      <InputRating placeholder="To" filterName="vote_averageLte" />
    </div>
  );
};
