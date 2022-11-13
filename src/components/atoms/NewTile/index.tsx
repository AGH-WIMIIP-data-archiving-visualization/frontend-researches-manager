import * as React from "react";
import { NewTile, Text } from "./styles";
export const NewProjectTile = ({ onClick, text }: NewProjectTileProps) => {
  return (
    <NewTile onClick={onClick}>
      <Text>{text}</Text>
    </NewTile>
  );
};
