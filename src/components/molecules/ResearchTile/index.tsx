import { SingleResearch } from "@/generated";
import { DeleteButton } from "@/src/components";
import { DeleteOutlined } from "@ant-design/icons";
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
export const ResearchTile: React.FC<
  SingleResearch & { onDelete?: (e: React.MouseEvent<HTMLElement>) => void }
> = (props) => {
  const {
    createdAt,
    data,
    deviceName,
    singleResearchName,
    scalingFunction,
    onDelete,
  } = props;
  return (
    <Tile activeBorder={!data}>
      <Contents>
        <ProjectNameContainer>
          <Title>{singleResearchName}</Title>
          <Flex>
            <DetailsLabel>Created at:</DetailsLabel>
            <DetailsValue>{new Date(createdAt).toLocaleString()}</DetailsValue>
          </Flex>
          {deviceName && (
            <Flex>
              <DetailsLabel>Device Name:</DetailsLabel>
              <DetailsValue>{deviceName}</DetailsValue>
            </Flex>
          )}
          {scalingFunction && (
            <Flex>
              <DetailsLabel>Function:</DetailsLabel>
              <DetailsValue>f(x)={scalingFunction}</DetailsValue>
            </Flex>
          )}
        </ProjectNameContainer>
      </Contents>
      <TileFooter>
        <Flex>
          <DetailsLabel>Data: </DetailsLabel>
          <DetailsValue>
            {data ? "research completed" : "ready to start research"}
          </DetailsValue>
        </Flex>
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
