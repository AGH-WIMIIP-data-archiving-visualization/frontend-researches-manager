import { Device, SingleRead } from "@/generated";
import {
  useGetResearchById,
  useGetDataFromLabjack,
  LabjackConnectorResponse,
  useAddDataToResearch,
} from "@/src/api";
import {
  Container,
  Flex,
  ResearchPageLeftPane,
  ResearchPageRightPane,
} from "@/src/components";
import { evaluate } from "mathjs";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";

const ResearchInProject: NextPage = () => {
  const [run, setRun] = useState(false);
  const [currentData, setCurrentData] = useState<SingleRead[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>();

  const {
    data: backendResearchData,
    refetch,
    isLoading: isResearchByIdLoading,
  } = useGetResearchById();

  const { refetch: runLabjack, isFetching: isLabjackFetching } =
    useGetDataFromLabjack(
      {
        analogInputNo: selectedDevice?.deviceInput ?? 0,
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

  const isCreateMode = !backendResearchData?.data && !isResearchByIdLoading;

  const preparedData: SingleRead[] = useMemo(
    () =>
      currentData.map((e, index) => ({
        iteration: index,
        voltageValue: evaluate(
          selectedDevice?.scalingFunction ??
            backendResearchData?.scalingFunction ??
            "x*1",
          {
            x: e.voltageValue,
          }
        ),
      })),
    [currentData]
  );

  const handleOnStart = () => {
    runLabjack();
    setRun(true);
  };
  const handleOnStop = () => setRun(false);

  const handleOnClear = () => setCurrentData([]);

  const handleOnSave = async () => {
    await mutateAsync({
      id: backendResearchData!.id,
      data: currentData,
      deviceName: selectedDevice?.deviceName ?? "",
      scalingFunction: selectedDevice?.scalingFunction ?? "",
      unit: selectedDevice?.unit ?? "",
    });
    refetch();
  };
  return (
    <Container>
      <Flex>
        <ResearchPageLeftPane
          isCreateMode={isCreateMode}
          preparedData={preparedData}
          createdAt={backendResearchData?.createdAt}
          name={backendResearchData?.singleResearchName}
          Xlabel={backendResearchData?.unit ?? selectedDevice?.unit}
        />
        {isCreateMode && (
          <ResearchPageRightPane
            device={selectedDevice}
            selectDevice={setSelectedDevice}
            onStart={handleOnStart}
            onStop={handleOnStop}
            onClear={handleOnClear}
            onSave={handleOnSave}
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
