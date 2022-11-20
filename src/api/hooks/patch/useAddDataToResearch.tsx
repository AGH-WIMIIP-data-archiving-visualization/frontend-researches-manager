import { SingleRead, SingleResearch } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

export interface PatchDataToResearch {
  id: string;
  data: SingleRead[];
}

const patchDataToResearch = async (
  params: PatchDataToResearch,
  getToken: GetAccessTokenSilently
): Promise<SingleResearch> => {
  const token = await getToken();
  return await axiosClient
    .patch(`/single-research/${params.id}`, params.data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useAddDataToResearch = (
  options?: CustomUseMutationOptions<PatchDataToResearch>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["patchDataToResearch"],
    (params: PatchDataToResearch) =>
      patchDataToResearch(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
