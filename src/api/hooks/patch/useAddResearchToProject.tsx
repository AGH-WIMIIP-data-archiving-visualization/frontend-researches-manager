import { Project } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

export interface PatchResearchToProjectType {
  projectId: string;
  researchId: string;
}

const patchResearchToProject = async (
  params: PatchResearchToProjectType,
  getToken: GetAccessTokenSilently
): Promise<Project> => {
  const token = await getToken();
  return await axiosClient
    .patch(
      `/project/${params.projectId}/single-research/${params.researchId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => response.data);
};

export const useAddResearchToProject = (
  options?: CustomUseMutationOptions<PatchResearchToProjectType | Project>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["patchResearchToProject"],
    (params: PatchResearchToProjectType) =>
      patchResearchToProject(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
