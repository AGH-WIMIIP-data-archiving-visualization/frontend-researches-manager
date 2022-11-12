import { Box } from "../Box";
import styled from "@emotion/styled";

export const Paper = styled(Box)`
  position: relative;
  box-shadow: ${(p) => p.theme.shadows};
  background-color: ${(p) => p.theme.palette.paper};
`;
