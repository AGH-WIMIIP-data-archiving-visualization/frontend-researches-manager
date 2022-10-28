import styled from "@emotion/styled";
import { CloseCircleOutlined } from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";

export const CustomSider = styled(Sider)`
  position: fixed;
  z-index: 20;
  width: 100%;
  top: 0;
  height: 100%;
  box-shadow: 0px 5px 30px #0000000f;
`;

export const CloseButton = styled(CloseCircleOutlined)`
  position: absolute;
  cursor: pointer;
  top: 15px;
  font-size: 25px;
  right: 15px;
  color: #fff;
`;

export const SiderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 100%;
  padding: 40px 10px 20px 10px;
`;
