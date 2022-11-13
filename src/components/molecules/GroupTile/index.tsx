import { GroupResearch } from "@/generated";
import {
  Contents,
  Description,
  ProjectNameContainer,
  Tile,
  TileFooter,
  Title,
  Flex,
  DetailsLabel,
  DetailsValue,
} from "./styles";
export const GroupTile: React.FC<GroupResearch> = (props) => {
  const { createdAt, description, groupResearchName, updatedAt } = props;
  return (
    <Tile activeBorder={true}>
      <Contents>
        <ProjectNameContainer>
          <Title>{groupResearchName}</Title>
          <Flex>
            <DetailsLabel>Created at:</DetailsLabel>
            <DetailsValue>{new Date(createdAt).toLocaleString()}</DetailsValue>
          </Flex>
          <Flex>
            <DetailsLabel>Updated at:</DetailsLabel>
            <DetailsValue>{new Date(updatedAt).toLocaleString()}</DetailsValue>
          </Flex>
        </ProjectNameContainer>
      </Contents>
      <TileFooter>
        <Description>{description}</Description>
      </TileFooter>
    </Tile>
  );
};
