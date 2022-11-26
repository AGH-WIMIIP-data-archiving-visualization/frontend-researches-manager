import {
  CreateDeviceDto,
  CreateGroupResearchkDto,
  Device,
  GroupResearch,
} from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

const postDevice = async (
  createGroup: CreateDeviceDto,
  getToken: GetAccessTokenSilently
): Promise<Device> => {
  const token = await getToken();
  return await axiosClient
    .post("/device", createGroup, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const usePostDevice = (
  options?: CustomUseMutationOptions<CreateDeviceDto>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["addDevice"],
    (params: CreateDeviceDto) => postDevice(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
