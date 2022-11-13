import { CreateGroupResearchkDto, GroupResearch } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

const postGroup = async (
  createGroup: CreateGroupResearchkDto,
  getToken: GetAccessTokenSilently
): Promise<GroupResearch> => {
  const token = await getToken();
  return await axiosClient
    .post("/group-research", createGroup, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const usePostGroup = (
  options?: CustomUseMutationOptions<CreateGroupResearchkDto>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["addGroup"],
    (params: CreateGroupResearchkDto) =>
      postGroup(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
