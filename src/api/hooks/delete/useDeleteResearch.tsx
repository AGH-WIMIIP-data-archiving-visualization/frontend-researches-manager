import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseMutationOptions } from "../../types";

const deleteResearch = async (
  getToken: GetAccessTokenSilently,
  id?: string
): Promise<void> => {
  const token = await getToken();
  return await axiosClient
    .delete(`/single-research/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useDeleteResearch = (
  options?: CustomUseMutationOptions<void | string>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["deleteResearch"],
    (id?: string) => deleteResearch(getAccessTokenSilently, id),
    {
      ...options,
    }
  );
};
