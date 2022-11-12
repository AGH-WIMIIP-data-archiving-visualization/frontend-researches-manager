import { CreateProjectDto } from "@/generated";
import { useGetProjects, usePostProjects } from "@/src/api";
import {
  Container,
  CreateProjectForm,
  ProjectTile,
  TileGrid,
} from "@/src/components";
import { NewProjectTile } from "@/src/components/atoms/NewTile";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Modal, Typography } from "antd";
import React, { useState } from "react";
const { Title } = Typography;
import NextLink from "next/link";
import { paths } from "@/src/paths";

const PrivateScope = () => {
  const { data, refetch, isLoading } = useGetProjects();
  const { mutateAsync } = usePostProjects();
  const { user } = useAuth0();
  const [showModalAddProject, setShowModalAddProject] = useState(false);

  const [form] = Form.useForm<CreateProjectDto>();
  const { submit } = form;

  return (
    <Container>
      <Title type="secondary" level={3}>
        Private Scope
      </Title>
      <Modal
        onCancel={() => {
          setShowModalAddProject(false);
        }}
        okText="Add Project"
        okButtonProps={{ loading: isLoading }}
        title={<b>Add project</b>}
        destroyOnClose
        open={showModalAddProject}
        onOk={() => {
          submit();
        }}
      >
        <CreateProjectForm
          form={form}
          onFinish={(data: CreateProjectDto) => {
            mutateAsync(data).then(() => {
              refetch();
              setShowModalAddProject(false);
            });
          }}
        />
      </Modal>

      <TileGrid header={`Projects (${user?.email})`}>
        <NewProjectTile
          onClick={() => setShowModalAddProject(true)}
          text={"+ new project"}
        />

        {data &&
          data.map((e) => (
            <NextLink
              key={e.id}
              passHref
              href={paths.project.go({ projectId: e.id })}
            >
              <a>
                <ProjectTile key={e.id} {...e} />
              </a>
            </NextLink>
          ))}
      </TileGrid>
    </Container>
  );
};

export default PrivateScope;
