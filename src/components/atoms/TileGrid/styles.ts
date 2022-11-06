import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-template-rows: auto;
  grid-gap: 20px;
  padding: 20px;
`;
export const Container = styled.div<{ open?: boolean }>`
  background-color: #d8d8d8;
  border-radius: 8px;
  margin-bottom: 20px;
  min-height: 600px;
`;

export const Header = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #020202;
  padding: 20px;
`;
