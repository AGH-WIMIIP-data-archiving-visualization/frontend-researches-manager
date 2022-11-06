import styled from "@emotion/styled";

export const Tile = styled.div<{ activeBorder?: boolean }>`
  background: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #020202;
  min-height: 200px;
  max-height: 100%;
  border-radius: 6px;
  transition: 0.25s all;
  border-color: #ee2549;
  &:hover {
    background: #e5e5e5;
  }
`;

export const Contents = styled.div`
  cursor: pointer;
  padding: 20px 20px 0;
`;

export const ProjectNameContainer = styled.div`
  margin-bottom: 10px;
`;

export const TileFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px;
`;

export const Description = styled.div`
  font-weight: 300;
  font-size: 12px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #020202;
  margin: 0px 0px 6px;
  text-align: start;
`;

export const DetailsLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #020202;
`;

export const DetailsValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #7f7f7f;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
