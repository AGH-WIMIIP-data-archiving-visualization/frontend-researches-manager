import { SingleRead } from "@/generated";
import { useGetResearchById } from "@/src/api";
import { Container, Flex, ResearchPageLeftPane } from "@/src/components";
import { evaluate } from "mathjs";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";

const ResearchInPublicProject: NextPage = () => {
  const [currentData, setCurrentData] = useState<SingleRead[]>([]);

  const { data: backendResearchData, isLoading: isResearchByIdLoading } =
    useGetResearchById();

  useEffect(() => {
    return setCurrentData(backendResearchData?.data ?? []);
  }, [backendResearchData]);

  const preparedData: SingleRead[] = useMemo(
    () =>
      currentData.map((e, index) => ({
        iteration: index,
        voltageValue: evaluate(backendResearchData?.scalingFunction ?? "x*1", {
          x: e.voltageValue,
        }),
      })),
    [currentData]
  );

  return (
    <Container>
      <Flex>
        <ResearchPageLeftPane
          isCreateMode={false}
          preparedData={preparedData}
          createdAt={backendResearchData?.createdAt}
          name={backendResearchData?.singleResearchName}
          Xlabel={backendResearchData?.unit}
        />
      </Flex>
    </Container>
  );
};

export default ResearchInPublicProject;
