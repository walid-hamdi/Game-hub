import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import PlatformsIconIList from "./PlatformIconIList";
import ScoreCritic from "./ScoreCritic";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Link to={`/games/${game.slug}`}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={4}>
            <PlatformsIconIList
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <ScoreCritic score={game.metacritic} />
          </HStack>
          <Heading>
            {game.name} <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
