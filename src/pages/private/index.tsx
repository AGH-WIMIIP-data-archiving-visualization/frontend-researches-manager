import { useProjects } from "@/src/api";
import { Container } from "@/src/components";
import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const PrivateScope = () => {
  const { data } = useProjects();
  return (
    <Container>
      <Title type="secondary" level={3}>
        Private Scope
      </Title>
      {data && data.map((e) => e.projectName)}
    </Container>
  );
};

export default PrivateScope;
