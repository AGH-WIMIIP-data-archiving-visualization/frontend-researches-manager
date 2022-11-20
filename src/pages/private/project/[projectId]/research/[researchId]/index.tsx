import { SingleRead } from "@/generated";
import {
  useGetResearchById,
  useGetDataFromLabjack,
  LabjackConnectorResponse,
  useAddDataToResearch,
} from "@/src/api";
import { Container, Flex } from "@/src/components";
import {
  ClearOutlined,
  LineChartOutlined,
  PlayCircleOutlined,
  SaveOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Line } from "@ant-design/plots";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { evaluate } from "mathjs";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
const { Title, Text } = Typography;

const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  flex: 80%;
  margin: 0 20px;
  padding: 20px 40px;
  background-color: ${(p) => p.theme.palette.paper};
  min-height: 700px;
`;

const RightPane = styled.div`
  display: flex;
  flex-direction: column;

  flex: 20%;
  margin: 0 20px;
  padding: 20px 40px;
  background-color: ${(p) => p.theme.palette.paper};
  min-height: 700px;
`;

const NoDataIcon = styled(LineChartOutlined)`
  color: ${(p) => p.theme.palette.gray500};
  font-size: 370px;
`;

const NoDataTitle = styled.h1`
  margin-bottom: -100px;
  color: ${(p) => p.theme.palette.gray500};
  font-weight: 800;
  font-size: ${(p) => p.theme.fontSizes.xxl}; ;
`;

const ResearchInProject: NextPage = () => {
  const [run, setRun] = useState(false);
  const [currentData, setCurrentData] = useState<SingleRead[]>([]);

  const {
    data: backendResearchData,
    refetch,
    isLoading: isrResearchByIdLoading,
  } = useGetResearchById();

  const { refetch: runLabjack, isFetching: isLabjakcFetching } =
    useGetDataFromLabjack(
      {
        analogInputNo: 0,
        duration: 1,
      },
      {
        onSuccess: (e: LabjackConnectorResponse) => {
          setCurrentData((prev) => [...prev, ...e.response]);
          if (run) {
            runLabjack();
          }
        },
      }
    );

  const { mutateAsync, isLoading } = useAddDataToResearch();

  useEffect(() => {
    return setCurrentData(backendResearchData?.data ?? []);
  }, [backendResearchData]);

  const isData = backendResearchData?.data || currentData.length != 0;
  const isReadOnlyMode = !backendResearchData?.data && !isrResearchByIdLoading;

  const f = "572257.26 * x - 944477.12";
  const preparedData: SingleRead[] = useMemo(
    () =>
      currentData.map((e, index) => ({
        iteration: index,
        voltageValue: evaluate(f, { x: e.voltageValue }),
      })),
    [currentData]
  );
  return (
    <Container>
      <Flex>
        <LeftPane>
          <Flex fullW justify="space-between" align="baseline">
            <Title level={3}>{backendResearchData?.singleResearchName}</Title>
            <Text>{backendResearchData?.createdAt}</Text>
          </Flex>
          <Flex col fullH justify="space-around" gap={"30px"}>
            <Title level={3}>Research Data</Title>
            <Flex justify="center">
              {isReadOnlyMode && currentData.length === 0 && (
                <Flex col align="center">
                  <NoDataTitle>No data </NoDataTitle>
                  <NoDataIcon />
                </Flex>
              )}
              {isData && (
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
        {isReadOnlyMode && (
          <RightPane>
            <Flex col gap="20px" justify="center">
              <Title level={4}> Panel</Title>
              <Button
                icon={<PlayCircleOutlined />}
                onClick={() => {
                  runLabjack();
                  setRun(true);
                }}
                type="primary"
                size="large"
                loading={isLabjakcFetching && run}
              >
                Start Research
              </Button>

              <Button
                icon={<StopOutlined />}
                disabled={!isLabjakcFetching}
                loading={isLabjakcFetching && !run}
                onClick={() => setRun(false)}
                type="primary"
                size="large"
              >
                Stop
              </Button>
              <Button
                disabled={!currentData.length}
                icon={<ClearOutlined />}
                onClick={() => setCurrentData([])}
                type="primary"
                size="large"
              >
                Clear
              </Button>
              <Button
                disabled={!currentData.length || isLabjakcFetching}
                loading={isLoading}
                icon={<SaveOutlined />}
                onClick={async () => {
                  await mutateAsync({
                    id: backendResearchData!.id,
                    data: currentData,
                  });
                  refetch();
                }}
                type="primary"
                size="large"
              >
                Save
              </Button>
            </Flex>
          </RightPane>
        )}
      </Flex>
    </Container>
  );
};

export default ResearchInProject;
