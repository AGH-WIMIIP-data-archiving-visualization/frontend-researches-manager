import { Container } from "@/src/components";
import { Typography } from "antd";
import React from "react";
const { Title } = Typography;

const PublicScope = () => {
  return (
    <Container>
      <Title type="secondary" level={3}>
        Public Scope
      </Title>
    </Container>
  );
};

export default PublicScope;
