import styled from "@emotion/styled";

export const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 20%;
  margin: 0 20px;
  padding: 20px 40px;
  background-color: ${(p) => p.theme.palette.paper};
  min-height: 700px;
  gap: 20px;
`;
