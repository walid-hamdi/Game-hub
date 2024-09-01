import useGenres from "./useGenres";

export const useGenre = (genreId?: number) => {
  const { data: genres } = useGenres();

  return genres?.results.find((genre) => genre.id === genreId);
};
