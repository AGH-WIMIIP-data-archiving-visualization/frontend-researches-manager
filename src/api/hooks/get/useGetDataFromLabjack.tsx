import { Project } from "@/generated";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import axiosClient from "../../http-common";
import { GetAccessTokenSilently, CustomUseQueryOptions } from "../../types";

export interface ResponseMessage {
  iteration: number;
  voltageValue: number;
}

export interface LabjackConnectorResponse {
  response: ResponseMessage[];
}

export interface LabjackConnectorInput {
  analogInputNo: number;
  duration: number;
}

const getDataFromLabjack = async (
  getToken: GetAccessTokenSilently,
  input: LabjackConnectorInput
): Promise<LabjackConnectorResponse[]> => {
  const token = await getToken();
  return await axiosClient
    .get("/single-research/labjack-1", {
      params: {
        analogInputNo: input.analogInputNo,
        duration: input.duration,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

export const useGetDataFromLabjack = (
  input: LabjackConnectorInput,
  options?: CustomUseQueryOptions<LabjackConnectorResponse[]> | any
) => {
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(
    ["getLabjackData"],
    () => getDataFromLabjack(getAccessTokenSilently, input),
    {
      ...options,
      enabled: false,
      staleTime: 0,
    }
  );
};
