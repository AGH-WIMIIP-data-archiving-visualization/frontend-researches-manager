import { useGetProjectById } from "@/src/api/";
import {
  Container,
  Flex,
  GroupTile,
  ProjectHeader,
  ResearchTile,
  TileGrid,
} from "@/src/components";
import { paths } from "@/src/paths";
import { NextPage } from "next";
import NextLink from "next/link";
import React from "react";

const PublicProject: NextPage = () => {
  const { data: projectData } = useGetProjectById();

  return (
    <Container>
      <Flex col gap="40px">
        <ProjectHeader data={projectData} />
        <TileGrid
          header={`Research groups for ${projectData?.projectName} project`}
        >
          {projectData?.groupsResearch &&
            projectData?.groupsResearch.map((e) => (
              <NextLink
                key={e.id}
                passHref
                href={paths.groupInPublicProject.go({
                  projectId: projectData?.id ?? "",
                  groupId: e.id,
                })}
              >
                <a>
                  <GroupTile key={e.id} {...e} />
                </a>
              </NextLink>
            ))}
        </TileGrid>
        <TileGrid
          header={`Single researches for ${projectData?.projectName} project`}
        >
          {projectData?.singleResearches &&
            projectData?.singleResearches
              .filter((p) => p.data)
              .map((e) => (
                <NextLink
                  key={e.id}
                  passHref
                  href={paths.researchInPublicProject.go({
                    projectId: projectData?.id ?? "",
                    researchId: e.id,
                  })}
                >
                  <a>
                    <ResearchTile key={e.id} {...e} />
                  </a>
                </NextLink>
              ))}
        </TileGrid>
      </Flex>
    </Container>
  );
};

export default PublicProject;
