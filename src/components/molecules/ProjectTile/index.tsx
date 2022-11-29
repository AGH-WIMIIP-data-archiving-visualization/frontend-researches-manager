import { Project } from "@/generated";
import { DeleteOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { DeleteButton } from "@/src/components";
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
export const ProjectTile: React.FC<
  Project & { onDelete?: (e: React.MouseEvent<HTMLElement>) => void }
> = (props) => {
  const { createdAt, description, isPublic, projectName, updatedAt, onDelete } =
    props;
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
        {onDelete && (
          <DeleteButton
            onClick={(e) => onDelete(e)}
            type="primary"
            icon={<DeleteOutlined />}
            size="large"
          />
        )}
      </TileFooter>
    </Tile>
  );
};
