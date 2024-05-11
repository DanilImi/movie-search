import { Box, Group, Rating, Text, Image as ImageMantine } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";
import classes from "../styles/card-movie.module.css";
import { MoviesWithGenresLabel } from "../../../shared/type/type";
import { formatVote } from "../../../shared/utils/format-vote";

interface CardMovieProps {
  movie: MoviesWithGenresLabel;
}

export const CardMovie: FC<CardMovieProps> = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    vote_count,
    genres_label,
  } = movie;
  const release_year = new Date(release_date).toLocaleDateString(undefined, {
    year: "numeric",
  });
  return (
    <Box className={classes.card}>
      <Box className={classes.wrapper}>
        <ImageMantine
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          w={119}
          h={170}
          width={119}
          height={170}
          flex="none"
          component={Image}
          fallbackSrc="/no-poster.png"
          alt="poster"
        />
        <Box className={classes.detail_wrapper}>
          <Group gap={8} className={classes.group}>
            <Text
              fw={600}
              size="xl"
              lineClamp={2}
              c="var(--mantine-color-purple-5)"
            >
              {original_title}
            </Text>
            <Text size="md" c="var(--mantine-color-gray-5)">
              {release_year}
            </Text>
            <Box className={classes.rating_vote_wrapper}>
              <Rating size={"lg"} count={1} value={1} />
              <Text fw={600} size="md">
                {vote_average.toFixed(1)}
              </Text>
              <Text size="md" c="var(--mantine-color-gray-5)">
                ({formatVote(vote_count)})
              </Text>
            </Box>
          </Group>
          <Box className={classes.genres_wrapper}>
            <Text size="md" c="var(--mantine-color-gray-5)">
              Genres
            </Text>
            <Text size="md" truncate="end">
              {genres_label.join(", ")}
            </Text>
          </Box>
        </Box>
      </Box>
      <Rating count={1} size={"lg"} color="var(--mantine-color-purple-5)" />
    </Box>
  );
};
