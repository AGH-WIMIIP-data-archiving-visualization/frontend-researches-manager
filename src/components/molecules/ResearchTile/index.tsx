import { SingleResearch } from "@/generated";
import {
  Contents,
  ProjectNameContainer,
  Tile,
  TileFooter,
  Title,
  Flex,
  DetailsLabel,
  DetailsValue,
} from "./styles";
export const ResearchTile: React.FC<SingleResearch> = (props) => {
  const { createdAt, data, deviceName, singleResearchName } = props;
  return (
    <Tile activeBorder={true}>
      <Contents>
        <ProjectNameContainer>
          <Title>{singleResearchName}</Title>
          <Flex>
            <DetailsLabel>Created at:</DetailsLabel>
            <DetailsValue>{new Date(createdAt).toLocaleString()}</DetailsValue>
          </Flex>
          <Flex>
            <DetailsLabel>Device Name:</DetailsLabel>
            <DetailsValue>{deviceName}</DetailsValue>
          </Flex>
        </ProjectNameContainer>
      </Contents>
      <TileFooter>
        <Flex>
          <DetailsLabel>Data: </DetailsLabel>
          <DetailsValue>
            {data ? "research completed" : "ready to start research"}
          </DetailsValue>
        </Flex>
      </TileFooter>
    </Tile>
  );
};
