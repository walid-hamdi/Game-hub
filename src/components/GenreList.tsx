import { Heading, HStack, Image, Link, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store/store";
import GenreListSkelton from "./GenreListSkelton";

const GenreList = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const setGenreId = useGameQueryStore((store) => store.setGenreId);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <GenreListSkelton />;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius="8"
                boxSize="32px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontSize="lg"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                onClick={() => {
                  setGenreId(genre.id);
                }}
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
