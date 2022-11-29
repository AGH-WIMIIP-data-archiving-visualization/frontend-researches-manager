import { Device } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseMutationOptions } from "../../types";

const deleteDevices = async (
  getToken: GetAccessTokenSilently,
  id?: string
): Promise<void> => {
  const token = await getToken();
  return await axiosClient
    .delete(`/device/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useDeleteDevices = (
  options?: CustomUseMutationOptions<void | string>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["deleteDevices"],
    (id?: string) => deleteDevices(getAccessTokenSilently, id),
    {
      ...options,
    }
  );
};
