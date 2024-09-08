import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ children }: any) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children <= limit) return children;

  const summary = expanded ? children : children.substring(0, 100) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size="xs"
          marginLeft={1}
          bgColor={"gold"}
          color={"black"}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
