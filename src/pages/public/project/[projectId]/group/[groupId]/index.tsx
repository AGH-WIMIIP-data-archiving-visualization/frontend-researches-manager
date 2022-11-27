import { useGetGroupById } from "@/src/api/hooks/get/useGetGroupById";
import {
  Container,
  Flex,
  GroupHeader,
  ResearchTile,
  TileGrid,
} from "@/src/components";
import { paths } from "@/src/paths";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";

const GroupInPublicProject: NextPage = () => {
  const {
    query: { projectId, groupId },
  } = useRouter();
  const { data: groupData } = useGetGroupById();

  return (
    <Container>
      <Flex col gap="40px">
        <GroupHeader data={groupData} />
        <TileGrid
          header={`Single researches for ${groupData?.groupResearchName} group`}
        >
          {groupData?.singleResearches &&
            groupData?.singleResearches.map((e) => (
              <NextLink
                key={e.id}
                passHref
                href={paths.researchInPublicGroup.go({
                  projectId: projectId,
                  groupId: groupId,
                  researchId: e.id,
                })}
              >
                <a key={e.id}>
                  <ResearchTile key={e.id} {...e} />
                </a>
              </NextLink>
            ))}
        </TileGrid>
      </Flex>
    </Container>
  );
};

export default GroupInPublicProject;
