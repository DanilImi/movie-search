import { useState } from "react";
import { AppShell, MultiSelect, Select } from "@mantine/core";
import { MainContainer } from "../../shared/ui/main-container/main-container";
import { MainTitle } from "../../shared/ui/main-title/main-title";
import classes from "./movies.module.css";
import { CheckMark } from "./check-mark";

const data = [
  "Drama",
  "Comedy",
  "Animation",
  "Thriller",
  "Fantasy",
  "check1",
  "check2",
  "check3",
  "check4",
];

export const MoviesPage = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  return (
    <MainContainer size="md">
      <MainTitle>Movies</MainTitle>
      <AppShell.Section>
        <MultiSelect
          classNames={{
            ...classes,
            section: `${classes.section} ${
              isOpenDropdown ? classes.isOpenDropdown : ""
            }`,
          }}
          withCheckIcon={false}
          size="md"
          radius="md"
          label="Genres"
          placeholder={!value.length ? "Select genre" : ""}
          data={data}
          maxDropdownHeight={224}
          rightSection={
            <CheckMark
              stroke={
                isOpenDropdown
                  ? "var(--mantine-color-purple-5)"
                  : "var(--mantine-color-gray-5)"
              }
            />
          }
          onChange={setValue}
          comboboxProps={{
            offset: 8,
            onOpen() {
              setIsOpenDropdown(true);
            },
            onClose() {
              setIsOpenDropdown(false);
            },
          }}
        />
        {/* <Select
          classNames={{
            ...classes,
            section: `${classes.section} ${
              isOpenDropdown ? classes.isOpenDropdown : ""
            }`,
          }}
          withCheckIcon={false}
          size="md"
          radius="md"
          label="Genres"
          placeholder="Select genre"
          data={data}
          maxDropdownHeight={224}
          rightSection={
            <CheckMark
              stroke={
                isOpenDropdown
                  ? "var(--mantine-color-purple-5)"
                  : "var(--mantine-color-gray-5)"
              }
            />
          }
          comboboxProps={{
            offset: 8,
            onOpen() {
              setIsOpenDropdown(true);
            },
            onClose() {
              setIsOpenDropdown(false);
            },
          }}
        /> */}
      </AppShell.Section>
    </MainContainer>
  );
};
