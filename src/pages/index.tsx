import { MainLayout } from "@/src/layouts";
import { Container } from "@/src/components";

import { Typography } from "antd";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const { Title } = Typography;

const HomePage = () => {
  const { getAccessTokenSilently } = useAuth0();

  const test = async () => {
    const x = await getAccessTokenSilently();
    console.log(x);
  };

  test();
  return (
    <MainLayout>
      <Container>
        <Title type="secondary" level={3}>
          Time is running out
        </Title>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
