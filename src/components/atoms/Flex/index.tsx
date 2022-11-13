import { Box } from "../Box";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FlexProps } from "./types";

export const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${(p) =>
    p.col &&
    css`
      flex-direction: column;
    `};

  ${(p) =>
    p.wrap &&
    css`
      flex-wrap: wrap;
    `};

  ${(p) =>
    p.justify &&
    css`
      justify-content: ${p.justify};
    `}

  ${(p) =>
    p.align &&
    css`
      align-items: ${p.align};
    `}

    ${(p) =>
    p.gap &&
    css`
      gap: ${p.gap};
    `}
`;
