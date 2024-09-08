import { Heading } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { usePlatform } from "../hooks/usePlatform";
import useGameQueryStore from "../store/store";

const GameHeading = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
