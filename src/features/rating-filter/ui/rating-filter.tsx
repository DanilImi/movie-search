import { FC } from "react";
import classes from "../styles/rating-filter.module.css";
import { InputRating } from "../../../entities/input-rating";

export const RatingFilter: FC = () => {
  return (
    <div className={classes.rating}>
      <InputRating placeholder="From" label="Ratings" />
      <InputRating placeholder="To" />
    </div>
  );
};
