import styled from "@emotion/styled";
import { CloseCircleOutlined } from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";

export const CustomSider = styled(Sider)`
  position: fixed;
  z-index: ${(p) => p.theme.zIndexes.sider};
  width: 100%;
  top: 0;
  height: 100%;
  box-shadow: ${(p) => p.theme.shadows};
`;

export const CloseButton = styled(CloseCircleOutlined)`
  position: absolute;
  cursor: pointer;
  top: 15px;
  font-size: 25px;
  right: 15px;
  color: ${(p) => p.theme.palette.paper};
`;

export const SiderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 100%;
  padding: 40px 10px 20px 10px;
`;
