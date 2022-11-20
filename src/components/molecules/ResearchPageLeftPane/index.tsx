import { Empty, Flex } from "@/src/components";
import { Line } from "@ant-design/plots";
import { Typography } from "antd";
import { LeftPane } from "./styles";
import { ResearchPageLeftPaneProps } from "./types";
const { Title, Text } = Typography;
export const ResearchPageLeftPane: React.FC<ResearchPageLeftPaneProps> = ({
  createdAt,
  name,
  preparedData,
}) => {
  return (
    <LeftPane>
      <Flex fullW justify="space-between" align="baseline">
        <Title level={3}>{name}</Title>
        <Text>{createdAt}</Text>
      </Flex>
      <Flex col fullH justify="space-around" gap={"30px"}>
        <Title level={3}>Research Data</Title>
        <Flex justify="center">
          {preparedData.length === 0 && <Empty />}
          {preparedData.length > 0 && (
            <Line
              style={{
                width: "100%",
                height: "600px",
              }}
              {...{
                data: preparedData,
                padding: "auto",
                xField: "iteration",
                yField: "voltageValue",

                xAxis: {
                  line: {
                    style: {
                      stroke: "gray",

                      cursor: "pointer",
                    },
                  },
                  alias: "READ ITERATIONS",
                  title: {
                    text: "READ ITERATIONS",
                    style: {
                      fontSize: 24,
                    },
                  },
                },
                yAxis: {
                  line: {
                    style: {
                      stroke: "gray",

                      cursor: "pointer",
                    },
                  },
                  alias: "NEWTONS [N]",
                  title: {
                    text: "NEWTONS [N]",
                    style: {
                      fontSize: 24,
                    },
                  },
                },
              }}
            />
          )}
        </Flex>
      </Flex>
    </LeftPane>
  );
};
