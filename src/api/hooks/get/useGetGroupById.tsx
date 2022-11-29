import { GroupResearch, ProjectResponseDto } from "@/generated";
import { GroupResearchResponseDto } from "@/generated/models/GroupResearchResponseDto";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

const getGroupById = async (
  getToken: GetAccessTokenSilently,
  groupId?: string
): Promise<GroupResearchResponseDto> => {
  const token = await getToken();

  return await axiosClient
    .get(`/group-research/${groupId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetGroupById = (
  options?: CustomUseQueryOptions<GroupResearchResponseDto>
) => {
  const { getAccessTokenSilently } = useAuth0();
  const {
    query: { groupId },
  } = useRouter();
  const id = Array.isArray(groupId) ? groupId[0] : groupId;

  return useQuery([id], () => getGroupById(getAccessTokenSilently, id), {
    ...options,
  });
};
