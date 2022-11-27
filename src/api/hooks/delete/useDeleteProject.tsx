import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseMutationOptions } from "../../types";

const deleteProject = async (
  getToken: GetAccessTokenSilently,
  id?: string
): Promise<void> => {
  const token = await getToken();
  return await axiosClient
    .delete(`/project/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useDeleteProject = (
  options?: CustomUseMutationOptions<void | string>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["deleteProject"],
    (id?: string) => deleteProject(getAccessTokenSilently, id),
    {
      ...options,
    }
  );
};
