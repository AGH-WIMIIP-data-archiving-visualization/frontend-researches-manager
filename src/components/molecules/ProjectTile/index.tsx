import { Project } from "@/generated";
import { Typography } from "antd";
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
const { Text } = Typography;
export const ProjectTile: React.FC<Project> = (props) => {
  const { createdAt, description, isPublic, projectName, updatedAt } = props;
  return (
    <Tile activeBorder={true}>
      <Contents>
        <Text type={isPublic ? "success" : "danger"}>
          {isPublic ? "public" : "private"}
        </Text>
        <ProjectNameContainer>
          <Title>{projectName}</Title>
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
