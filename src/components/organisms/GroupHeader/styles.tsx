import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";

export const PrivateIcon = styled(ExclamationCircleOutlined)`
  color: ${(p) => p.theme.palette.red500};
  font-size: 20px;
`;

export const PublicIcon = styled(CheckCircleOutlined)`
  color: ${(p) => p.theme.palette.green700};
  font-size: 20px;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 15px;
  flex-direction: column;
`;
