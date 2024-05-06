import { Down } from "./down/down";
import { Up } from "./up/up";
import classes from "./chevron-rating.module.css";

export const ChevronRating = () => {
  return (
    <div className={classes.wrapper}>
      <Up />
      <Down />
    </div>
  );
};
