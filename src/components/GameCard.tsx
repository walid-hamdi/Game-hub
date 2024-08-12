import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsIconIList from "./PlatformIconIList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatformsIconIList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
