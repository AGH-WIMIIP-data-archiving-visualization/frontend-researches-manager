import { Empty, Flex, LineChart } from "@/src/components";
import { Typography } from "antd";
import { LeftPane } from "./styles";
import { ResearchPageLeftPaneProps } from "./types";
const { Title, Text } = Typography;
export const ResearchPageLeftPane: React.FC<ResearchPageLeftPaneProps> = ({
  data,
  isCreateMode,
  preparedData,
  Xlabel,
}) => {
  return (
    <LeftPane>
      <Flex fullW justify="space-between" align="baseline">
        <Flex col gap="15px">
          <Title code level={2}>
            RESEARCH/{data?.singleResearchName}
          </Title>
          {data?.deviceName && (
            <>
              <Flex align="baseline" gap="10px">
                <Title level={5}>Devide Name: </Title>
                <Text>{data?.deviceName}</Text>
              </Flex>
              <Flex align="baseline" gap="10px">
                <Title level={5}>Scaling Function: </Title>
                <Text>f(x)={data?.scalingFunction}</Text>
              </Flex>
              <Flex align="baseline" gap="10px">
                <Title level={5}>Unit: </Title>
                <Text>{data?.unit}</Text>
              </Flex>
            </>
          )}
        </Flex>
        <Text>{data?.createdAt}</Text>
      </Flex>

      <Flex col fullH align="center" justify="space-around" gap={"30px"}>
        <Title type="secondary" level={3}>
          CHART FOR {data?.singleResearchName} RESEARCH
        </Title>
        <Flex fullW justify="center">
          {preparedData.length === 0 && isCreateMode && <Empty />}
          {preparedData.length > 0 && (
            <LineChart xLabel={Xlabel} data={preparedData} />
          )}
        </Flex>
      </Flex>
    </LeftPane>
  );
};
