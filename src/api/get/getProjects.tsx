import { Project } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import axiosClient from "../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../types";

const getProjects = async (
  getToken: GetAccessTokenSilently
): Promise<Project[]> => {
  const token = await getToken();
  return await axiosClient
    .get("/project", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useProjects = (options?: CustomUseQueryOptions<Project[]>) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(["project"], () => getProjects(getAccessTokenSilently), {
    ...options,
  });
};
