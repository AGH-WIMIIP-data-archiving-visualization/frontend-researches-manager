import { useGetProjectById } from "@/src/api/";
import { Container } from "@/src/components";

import React from "react";

const Project = () => {
  const { data } = useGetProjectById();
  console.log(data);
  return <Container>{JSON.stringify(data)}</Container>;
};

export default Project;
