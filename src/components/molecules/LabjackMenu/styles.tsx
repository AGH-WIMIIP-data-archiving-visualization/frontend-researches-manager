import styled from "@emotion/styled";
import { Paper } from "@/src/components";
import { Button } from "antd";

export const LabjackMenuWrapper = styled.div`
  position: relative;
`;

export const LabjackContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: ${(p) => p.theme.palette.paper};
  width: 250px;
  position: absolute;
  top: 50px;
  left: -125px;
  gap: 10px;
`;

export const DeleteButton = styled(Button)`
  background: ${(p) => p.theme.palette.red500};
  border: 1px solid ${(p) => p.theme.palette.red500};
  &:hover {
    background: ${(p) => p.theme.palette.red400};
    border: 1px solid ${(p) => p.theme.palette.red100};
  }
`;
