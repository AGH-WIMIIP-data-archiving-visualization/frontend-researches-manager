import { Spin } from "antd";
import { LoadContainer } from "./styles";
import { LoaderProps } from "./types";

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <LoadContainer>
      <Spin size="large" />
    </LoadContainer>
  ) : (
    <></>
  );
};
