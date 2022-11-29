import { Device } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

const getDevices = async (
  getToken: GetAccessTokenSilently
): Promise<Device[]> => {
  const token = await getToken();
  return await axiosClient
    .get("/device", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetDevices = (options?: CustomUseQueryOptions<Device[]>) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(["getDevices"], () => getDevices(getAccessTokenSilently), {
    ...options,
  });
};
