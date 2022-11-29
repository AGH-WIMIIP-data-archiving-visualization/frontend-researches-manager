import { Project } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

interface getProjectFilter {
  publicOnly?: boolean;
}

const getProjects = async (
  getToken: GetAccessTokenSilently,
  isPublic?: boolean
): Promise<Project[]> => {
  const token = await getToken();
  return await axiosClient
    .get("/project", {
      params: {
        publicOnly: isPublic,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetProjects = (
  isPublic?: boolean,
  options?: CustomUseQueryOptions<Project[]>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(
    [isPublic ? "getProjects" : "getProjectsPublic"],
    () => getProjects(getAccessTokenSilently, isPublic),
    {
      ...options,
    }
  );
};
