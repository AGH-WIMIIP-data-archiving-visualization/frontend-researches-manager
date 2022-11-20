import { SingleResearch } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

const getResearchById = async (
  getToken: GetAccessTokenSilently,
  researchId?: string
): Promise<SingleResearch> => {
  const token = await getToken();

  return await axiosClient
    .get(`/single-research/${researchId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetResearchById = (
  options?: CustomUseQueryOptions<SingleResearch> | any
) => {
  const { getAccessTokenSilently } = useAuth0();
  const {
    query: { researchId },
  } = useRouter();
  const id = Array.isArray(researchId) ? researchId[0] : researchId;

  return useQuery([id], () => getResearchById(getAccessTokenSilently, id), {
    ...options,
  });
};
