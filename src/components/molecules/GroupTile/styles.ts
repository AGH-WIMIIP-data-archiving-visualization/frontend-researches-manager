import styled from "@emotion/styled";

export const Tile = styled.div<{ activeBorder?: boolean }>`
  background: ${(p) => p.theme.palette.paper};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(p) => p.theme.palette.text};
  min-height: 200px;
  max-height: 100%;
  transition: 0.25s all;
  border: 1px solid ${(p) => p.theme.palette.text};
  &:hover {
    border-color: ${(p) => p.theme.palette.gray200};
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
  align-items: flex-end;
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
  color: ${(p) => p.theme.palette.text};
  margin: 0px 0px 6px;
  text-align: start;
`;

export const DetailsLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${(p) => p.theme.palette.text};
`;

export const DetailsValue = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${(p) => p.theme.palette.gray500};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
