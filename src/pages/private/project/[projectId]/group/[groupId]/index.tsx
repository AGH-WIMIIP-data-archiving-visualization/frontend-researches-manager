import { useGetGroupById } from "@/src/api/hooks/get/useGetGroupById";
import {
  Container,
  CreateResearchForm,
  Flex,
  GroupHeader,
  ResearchTile,
  TileGrid,
} from "@/src/components";
import { NewProjectTile } from "@/src/components/atoms/NewTile";
import { paths } from "@/src/paths";
import { NextPage } from "next";
import { useState } from "react";
import NextLink from "next/link";
import { useAddResearchToGroup, usePostResearch } from "@/src/api";
import { Form, Modal } from "antd";
import { CreateSingleResearchkDto } from "@/generated";
import { useRouter } from "next/router";

const GroupInProject: NextPage = () => {
  const {
    query: { projectId, groupId },
  } = useRouter();
  const { data: groupData, refetch } = useGetGroupById();
  const [showModalAddResearch, setShowModalAddResearch] = useState(false);
  const [createResearchForm] = Form.useForm<CreateSingleResearchkDto>();
  const { submit: submitCreateResearchForm } = createResearchForm;

  const { mutateAsync: updateGroupWithResearch } = useAddResearchToGroup();
  const { mutateAsync: createResearch, isLoading: createResearchisLoading } =
    usePostResearch();
  return (
    <Container>
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
              isPublic: groupData?.isPublic ?? false,
              singleResearchName: singleResearchName,
            });
            await updateGroupWithResearch({
              groupId: groupData?.id ?? "",
              researchId: research.id,
            });
            await refetch();
            setShowModalAddResearch(false);
          }}
        />
      </Modal>
      <Flex col gap="40px">
        <GroupHeader data={groupData} />
        <TileGrid
          header={`Single researches for ${groupData?.groupResearchName} group`}
        >
          <NewProjectTile
            onClick={() => setShowModalAddResearch(true)}
            text={"+ new research"}
          />

          {groupData?.singleResearches &&
            groupData?.singleResearches.map((e) => (
              <NextLink
                key={e.id}
                passHref
                href={paths.researchInGroup.go({
                  projectId: projectId,
                  groupId: groupId,
                  researchId: e.id,
                })}
              >
                <a key={e.id}>
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

export default GroupInProject;
