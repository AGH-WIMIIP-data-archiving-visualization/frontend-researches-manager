import styled from "@emotion/styled";
import { MenuOutlined } from "@ant-design/icons";

export const Hamburger = styled(MenuOutlined)`
  color: ${(p) => p.theme.palette.paper};
  font-size: 24px;
  cursor: pointer;
  @media (min-width: 600px) {
    display: none;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  height: 96px;
  background-color: ${(p) => p.theme.palette.navy100};
  padding-left: 25px;
  padding-right: 25px;
  @media (max-width: 600px) {
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  top: 0;
  left: 0;
  z-index: ${(p) => p.theme.zIndexes.header};
  box-shadow: ${(p) => p.theme.shadows};
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
  }
`;
