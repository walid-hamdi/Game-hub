import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkelton = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List>
      <Skeleton>
        {items.map((item) => (
          <ListItem key={item} paddingY="5px">
            <HStack>
              <SkeletonCircle borderRadius="8" boxSize="32px" />
              <SkeletonText fontSize="lg" />
            </HStack>
          </ListItem>
        ))}
      </Skeleton>
    </List>
  );
};

export default GenreListSkelton;
