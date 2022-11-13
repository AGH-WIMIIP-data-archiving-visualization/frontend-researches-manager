import { Box } from "../Box";
import styled from "@emotion/styled";

export const Paper = styled(Box)`
  position: relative;
  border-radius: 8px;
  box-shadow: ${(p) => p.theme.shadows};
  background-color: ${(p) => p.theme.palette.gray200};
  @media (max-width: ${(p) => p.theme.breakpoints.md}px) {
    border-radius: 0px;
  }
`;
