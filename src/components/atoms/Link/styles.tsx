import styled from "@emotion/styled";
import { Typography } from "antd";
const { Text } = Typography;

export const StyledText = styled(Text)`
  color: ${(p) => p.theme.palette.paper};
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    color: ${(p) => p.theme.palette.gray200};
  }
`;
