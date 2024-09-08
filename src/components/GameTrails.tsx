import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trails, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;

  if (error) throw error;

  const first = trails?.results[0];

  return first ? (
    <video controls poster={first.preview} src={first.data[480]} />
  ) : null;
};

export default GameTrailer;
