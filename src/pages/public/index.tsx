import { useGetProjects } from "@/src/api";
import { Container, ProjectTile, TileGrid } from "@/src/components";
import { Typography } from "antd";
import React from "react";
const { Title } = Typography;
import NextLink from "next/link";
import { paths } from "@/src/paths";
import { NextPage } from "next";

const PublicScope: NextPage = () => {
  const { data } = useGetProjects(true);

  return (
    <Container>
      <Title type="secondary" level={3}>
        Public Scope
      </Title>

      <TileGrid header={`Projects - public`}>
        {data &&
          data.map((e) => (
            <NextLink
              key={e.id}
              passHref
              href={paths.projectPublic.go({ projectId: e.id })}
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

export default PublicScope;
