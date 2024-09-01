import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const findPlatformName = platforms?.results.find(
    (platform) => platform.id === gameQuery.genreId
  )?.name;

  const findGenreName = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  )?.name;

  const heading = `${findPlatformName || ""} ${findGenreName || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
