import { GroupResearch } from "@/generated";
import { DeleteButton } from "@/src/components";
import { DeleteOutlined } from "@ant-design/icons";
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
export const GroupTile: React.FC<
  GroupResearch & { onDelete?: (e: React.MouseEvent<HTMLElement>) => void }
> = (props) => {
  const { createdAt, description, groupResearchName, updatedAt, onDelete } =
    props;
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
