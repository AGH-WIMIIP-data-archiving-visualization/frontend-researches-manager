import _Link, { LinkProps } from "next/link";
import React from "react";
import { StyledText } from "./styles";
export const Link: React.FC<React.PropsWithChildren<LinkProps>> = (p) => {
  return (
    <_Link {...p}>
      <a>
        <StyledText>{p.children}</StyledText>
      </a>
    </_Link>
  );
};
