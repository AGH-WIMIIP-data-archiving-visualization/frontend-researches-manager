import styled from "@emotion/styled";
import { Button } from "antd";

export const DeleteButton = styled(Button)`
  background: ${(p) => p.theme.palette.red500};

  border: 1px solid ${(p) => p.theme.palette.red500};
  &:hover {
    background: ${(p) => p.theme.palette.red400};
    border: 1px solid ${(p) => p.theme.palette.red100};
  }
`;
