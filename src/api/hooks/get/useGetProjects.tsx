import { Project } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { QueryObserverOptions, useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

const getProjects = async (
  getToken: GetAccessTokenSilently
): Promise<Project[]> => {
  const token = await getToken();
  console.log(token);
  return await axiosClient
    .get("/project", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetProjects = (options?: CustomUseQueryOptions<Project[]>) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(["getProjects"], () => getProjects(getAccessTokenSilently), {
    ...options,
  });
};
