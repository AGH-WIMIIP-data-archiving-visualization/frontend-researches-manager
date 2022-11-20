import styled from "@emotion/styled";

export const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  flex: 80%;
  margin: 0 20px;
  padding: 20px 40px;
  background-color: ${(p) => p.theme.palette.paper};
  min-height: 700px;
`;
