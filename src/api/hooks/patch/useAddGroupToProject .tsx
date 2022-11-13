import { Project } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

export interface PatchGroupToProjectType {
  projectId: string;
  groupId: string;
}

const patchGroupToProject = async (
  params: PatchGroupToProjectType,
  getToken: GetAccessTokenSilently
): Promise<Project> => {
  const token = await getToken();
  return await axiosClient
    .patch(
      `/project/${params.projectId}/group-research/${params.groupId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => response.data);
};

export const useAddGroupToProject = (
  options?: CustomUseMutationOptions<PatchGroupToProjectType | Project>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["patchGroupToProject"],
    (params: PatchGroupToProjectType) =>
      patchGroupToProject(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
