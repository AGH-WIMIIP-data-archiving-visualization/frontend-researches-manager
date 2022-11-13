import React from "react";
import { Container, Grid, Header } from "./styles";
import { TileGridProps } from "./types";

export const TileGrid: React.FC<TileGridProps> = ({ children, header }) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Grid>{children}</Grid>
    </Container>
  );
};
