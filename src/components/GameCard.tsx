import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import PlatformsIconIList from "./PlatformIconIList";
import ScoreCritic from "./ScoreCritic";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformsIconIList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <ScoreCritic score={game.metacritic} />
        </HStack>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
