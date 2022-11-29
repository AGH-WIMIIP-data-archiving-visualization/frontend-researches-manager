import { CreateGroupResearchkDto, CreateSingleResearchkDto } from "@/generated";
import {
  useGetProjectById,
  useAddResearchToProject,
  usePostResearch,
  usePostGroup,
  useAddGroupToProject,
} from "@/src/api/";
import {
  Container,
  CreateResearchForm,
  CreateGroupForm,
  Flex,
  GroupTile,
  ProjectHeader,
  ResearchTile,
  TileGrid,
} from "@/src/components";
import { NewProjectTile } from "@/src/components/atoms/NewTile";
import { paths } from "@/src/paths";
import { Form, Modal } from "antd";
import { NextPage } from "next";
import NextLink from "next/link";

import React, { useState } from "react";

const Project: NextPage = () => {
  const [createResearchForm] = Form.useForm<CreateSingleResearchkDto>();
  const [createGroupForm] = Form.useForm<CreateGroupResearchkDto>();

  const { submit: submitCreateResearchForm } = createResearchForm;
  const { submit: submitCreateGroupForm } = createGroupForm;

  const { data: projectData, refetch } = useGetProjectById();

  const { mutateAsync: createResearch, isLoading: createResearchisLoading } =
    usePostResearch();
  const { mutateAsync: updateProjectWithResearch } = useAddResearchToProject();

  const { mutateAsync: createGroup, isLoading: createGroupisLoading } =
    usePostGroup();
  const { mutateAsync: updateProjectWithGroup } = useAddGroupToProject();

  const [showModalAddResearch, setShowModalAddResearch] = useState(false);
  const [showModalAddGroup, setShowModalAddGroup] = useState(false);

  return (
    <Container>
      <Modal
        onCancel={() => {
          setShowModalAddGroup(false);
        }}
        okText="Add Group"
        okButtonProps={{ loading: createGroupisLoading }}
        title={<b>Add Group</b>}
        destroyOnClose
        open={showModalAddGroup}
        onOk={() => {
          submitCreateGroupForm();
        }}
      >
        <CreateGroupForm
          form={createGroupForm}
          onFinish={async (formData: CreateGroupResearchkDto) => {
            const { description, groupResearchName } = formData;
            const group = await createGroup({
              description: description,
              groupResearchName: groupResearchName,
              isPublic: projectData?.isPublic ?? false,
            });
            await updateProjectWithGroup({
              projectId: projectData?.id ?? "",
              groupId: group.id,
            });
            await refetch();
            setShowModalAddGroup(false);
          }}
        />
      </Modal>
      <Modal
        onCancel={() => {
          setShowModalAddResearch(false);
        }}
        okText="Add Research"
        okButtonProps={{ loading: createResearchisLoading }}
        title={<b>Add Research</b>}
        destroyOnClose
        open={showModalAddResearch}
        onOk={() => {
          submitCreateResearchForm();
        }}
      >
        <CreateResearchForm
          form={createResearchForm}
          onFinish={async (formData: CreateSingleResearchkDto) => {
            const { singleResearchName } = formData;
            const research = await createResearch({
              isPublic: projectData?.isPublic ?? false,
              singleResearchName: singleResearchName,
            });
            await updateProjectWithResearch({
              projectId: projectData?.id ?? "",
              researchId: research.id,
            });
            await refetch();
            setShowModalAddResearch(false);
          }}
        />
      </Modal>
      <Flex col gap="40px">
        <ProjectHeader data={projectData} />
        <TileGrid
          header={`Research groups for ${projectData?.projectName} project`}
        >
          <NewProjectTile
            onClick={() => setShowModalAddGroup(true)}
            text={"+ new group"}
          />

          {projectData?.groupsResearch &&
            projectData?.groupsResearch.map((e) => (
              <NextLink
                key={e.id}
                passHref
                href={paths.groupInProject.go({
                  projectId: projectData?.id ?? "",
                  groupId: e.id,
                })}
              >
                <a>
                  <GroupTile
                    onDelete={() => console.log("delete")}
                    key={e.id}
                    {...e}
                  />
                </a>
              </NextLink>
            ))}
        </TileGrid>
        <TileGrid
          header={`Single researches for ${projectData?.projectName} project`}
        >
          <NewProjectTile
            onClick={() => setShowModalAddResearch(true)}
            text={"+ new research"}
          />

          {projectData?.singleResearches &&
            projectData?.singleResearches.map((e) => (
              <NextLink
                key={e.id}
                passHref
                href={paths.researchInProject.go({
                  projectId: projectData?.id ?? "",
                  researchId: e.id,
                })}
              >
                <a>
                  <ResearchTile
                    onDelete={() => console.log("delete")}
                    key={e.id}
                    {...e}
                  />
                </a>
              </NextLink>
            ))}
        </TileGrid>
      </Flex>
    </Container>
  );
};

export default Project;
