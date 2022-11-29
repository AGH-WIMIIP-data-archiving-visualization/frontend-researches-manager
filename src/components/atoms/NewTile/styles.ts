import styled from "@emotion/styled";

export const NewTile = styled.div`
  display: flex;
  color: ${(p) => p.theme.palette.text};
  flex-flow: column nowrap;
  min-height: 200px;
  max-height: 100%;
  min-width: 0px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(p) => p.theme.palette.gray500};
  border-style: dashed;
  background: transparent;
  cursor: pointer;
  transition: 0.25s all;
  &:hover {
    border-color: ${(p) => p.theme.palette.success};
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${(p) => p.theme.palette.text};
`;
