import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkelton from "./GameCardSkelton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, isLoading, data, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  const pageCount =
    data?.pages.reduce((total, acc) => total + acc.results.length, 0) || 0;

  if (error) <p>{error.message}</p>;

  return (
    <InfiniteScroll
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
      dataLength={pageCount}
    >
      <SimpleGrid
        spacing={10}
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkelton />
            </GameCardContainer>
          ))}

        {data?.pages.map((games, index) => {
          return (
            <React.Fragment key={index}>
              {games?.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
