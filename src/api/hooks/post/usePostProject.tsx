import { CreateProjectDto, Project } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

const postProject = async (
  createProject: CreateProjectDto,
  getToken: GetAccessTokenSilently
): Promise<Project> => {
  const token = await getToken();
  return await axiosClient
    .post("/project", createProject, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const usePostProject = (
  options?: CustomUseMutationOptions<CreateProjectDto>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["addProject"],
    (params: CreateProjectDto) => postProject(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
