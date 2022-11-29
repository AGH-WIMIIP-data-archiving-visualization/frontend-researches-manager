import { Flex, Paper } from "@/src/components";
import { PrivateIcon, PublicIcon, SideWrapper } from "./styles";
import { Typography } from "antd";
import { GroupHeaderProps } from "./types";
const { Title, Text } = Typography;

export const GroupHeader: React.FC<GroupHeaderProps> = ({ data }) => {
  return (
    <Paper px="30px" py="15px">
      <Flex>
        <SideWrapper>
          <Title code level={2}>
            GROUP/{data?.groupResearchName}
          </Title>
          <Flex align="baseline" gap="10px">
            <Title level={5}>Created At: </Title>
            <Text>{data?.createdAt}</Text>
          </Flex>
          <Flex align="baseline" gap="10px">
            <Title level={5}>Updated At: </Title>
            <Text>{data?.updatedAt}</Text>
          </Flex>
        </SideWrapper>
        <SideWrapper>
          <Flex align="baseline" gap="10px">
            <Title level={5}>Description: </Title>
            <Text italic>{data?.description}</Text>
          </Flex>
        </SideWrapper>
      </Flex>
    </Paper>
  );
};
