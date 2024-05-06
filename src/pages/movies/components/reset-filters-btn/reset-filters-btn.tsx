import { Button } from "@mantine/core";
import classes from "./reset-filters-btn.module.css";

export const ResetFiltersBtn = () => {
  return (
    <Button classNames={classes} variant="transparent">
      Reset filters
    </Button>
  );
};
