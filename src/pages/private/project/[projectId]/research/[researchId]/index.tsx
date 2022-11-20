import { SingleRead } from "@/generated";
import {
  useGetResearchById,
  useGetDataFromLabjack,
  LabjackConnectorResponse,
  useAddDataToResearch,
} from "@/src/api";
import {
  Container,
  Empty,
  Flex,
  ResearchPageRightPane,
} from "@/src/components";
import { LineChartOutlined } from "@ant-design/icons";
import { Line } from "@ant-design/plots";
import styled from "@emotion/styled";
import { Typography } from "antd";
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

const ResearchInProject: NextPage = () => {
  const [run, setRun] = useState(false);
  const [currentData, setCurrentData] = useState<SingleRead[]>([]);

  const {
    data: backendResearchData,
    refetch,
    isLoading: isResearchByIdLoading,
  } = useGetResearchById();

  const { refetch: runLabjack, isFetching: isLabjackFetching } =
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

  const { mutateAsync, isLoading: isSaving } = useAddDataToResearch();

  useEffect(() => {
    return setCurrentData(backendResearchData?.data ?? []);
  }, [backendResearchData]);

  const isData = backendResearchData?.data || currentData.length != 0;
  const isCreateMode = !backendResearchData?.data && !isResearchByIdLoading;

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
              {isCreateMode && currentData.length === 0 && <Empty />}
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
        {isCreateMode && (
          <ResearchPageRightPane
            onStart={() => {
              runLabjack();
              setRun(true);
            }}
            onStop={() => setRun(false)}
            onClear={() => setCurrentData([])}
            onSave={async () => {
              await mutateAsync({
                id: backendResearchData!.id,
                data: currentData,
              });
              refetch();
            }}
            hasData={currentData.length > 0}
            isLabjackFetching={isLabjackFetching}
            isRunning={run}
            onSaveLoading={isSaving}
          />
        )}
      </Flex>
    </Container>
  );
};

export default ResearchInProject;
