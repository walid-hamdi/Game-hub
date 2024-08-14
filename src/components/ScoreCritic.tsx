import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const ScoreCritic = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" borderRadius="4px" colorScheme={color} paddingX={2}>
      {score}
    </Badge>
  );
};

export default ScoreCritic;
