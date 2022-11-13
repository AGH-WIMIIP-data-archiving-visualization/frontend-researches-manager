import { ProjectResponseDto } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

const getProjectById = async (
  getToken: GetAccessTokenSilently,
  projectId?: string
): Promise<ProjectResponseDto> => {
  const token = await getToken();

  return await axiosClient
    .get(`/project/${projectId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetProjectById = (
  options?: CustomUseQueryOptions<ProjectResponseDto>
) => {
  const { getAccessTokenSilently } = useAuth0();
  const {
    query: { projectId },
  } = useRouter();
  const id = Array.isArray(projectId) ? projectId[0] : projectId;

  return useQuery([id], () => getProjectById(getAccessTokenSilently, id), {
    ...options,
  });
};
