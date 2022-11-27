import { GroupResearch, Project } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

export interface PatchResearchToGroupType {
  groupId: string;
  researchId: string;
}

const patchResearchToGroup = async (
  params: PatchResearchToGroupType,
  getToken: GetAccessTokenSilently
): Promise<GroupResearch> => {
  const token = await getToken();
  return await axiosClient
    .patch(
      `/group-research/${params.groupId}/single-research/${params.researchId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => response.data);
};

export const useAddResearchToGroup = (
  options?: CustomUseMutationOptions<PatchResearchToGroupType | GroupResearch>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["patchResearchToGroup"],
    (params: PatchResearchToGroupType) =>
      patchResearchToGroup(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
