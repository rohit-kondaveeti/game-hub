import { Badge } from "@chakra-ui/react";
import React from "react";

interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius="4px" fontSize="14px">
      {score}
    </Badge>
  );
};

export default CriticScore;
