import styled from "@emotion/styled";

export const NewTile = styled.div`
  display: flex;
  color: #020202;
  flex-flow: column nowrap;
  min-height: 200px;
  max-height: 100%;
  border-radius: 10px;
  min-width: 0px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #7f7f7f;
  border-style: dashed;
  background: transparent;
  cursor: pointer;
  transition: 0.25s all;
  &:hover {
    border-color: #007fff;
  }
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: #020202;
`;
