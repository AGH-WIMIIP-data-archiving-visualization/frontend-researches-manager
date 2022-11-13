import { CreateSingleResearchkDto, Project, SingleResearch } from "@/generated";
import {
  CustomUseMutationOptions,
  GetAccessTokenSilently,
} from "@/src/api/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import axiosClient from "../../http-common";

const postResearch = async (
  createResearch: CreateSingleResearchkDto,
  getToken: GetAccessTokenSilently
): Promise<SingleResearch> => {
  const token = await getToken();
  console.log(createResearch);
  return await axiosClient
    .post("/single-research", createResearch, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const usePostResearch = (
  options?: CustomUseMutationOptions<CreateSingleResearchkDto>
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useMutation(
    ["addResearch"],
    (params: CreateSingleResearchkDto) =>
      postResearch(params, getAccessTokenSilently),
    {
      ...options,
    }
  );
};
