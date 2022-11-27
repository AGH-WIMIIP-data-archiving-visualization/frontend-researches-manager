import { Empty, Flex, LineChart } from "@/src/components";
import { Typography } from "antd";
import { LeftPane } from "./styles";
import { ResearchPageLeftPaneProps } from "./types";
const { Title, Text } = Typography;
export const ResearchPageLeftPane: React.FC<ResearchPageLeftPaneProps> = ({
  createdAt,
  name,
  isCreateMode,
  preparedData,
  Xlabel,
}) => {
  return (
    <LeftPane>
      <Flex fullW justify="space-between" align="baseline">
        <Title level={3}>{name}</Title>
        <Text>{createdAt}</Text>
      </Flex>
      <Flex col fullH justify="space-around" gap={"30px"}>
        <Title level={3}>Data plot</Title>
        <Flex justify="center">
          {preparedData.length === 0 && isCreateMode && <Empty />}
          {preparedData.length > 0 && (
            <LineChart xLabel={Xlabel} data={preparedData} />
          )}
        </Flex>
      </Flex>
    </LeftPane>
  );
};
