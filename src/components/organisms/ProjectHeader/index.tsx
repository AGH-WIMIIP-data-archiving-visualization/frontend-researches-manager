import { Flex, Paper } from "@/src/components";
import { PrivateIcon, SideWrapper } from "./styles";
import { ProjectHeaderProps } from "./types";
import { Typography } from "antd";
const { Title, Text } = Typography;

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({ data }) => {
  return (
    <Paper px="30px" py="15px">
      <Flex>
        <SideWrapper>
          <Title code level={2}>
            PROJECT/{data?.projectName}
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
            <Title level={4}>Access: </Title>
            {data?.isPublic ? (
              <Flex align="baseline" gap="5px">
                <Text strong type="success">
                  Public
                </Text>
              </Flex>
            ) : (
              <Flex align="baseline" gap="5px">
                <PrivateIcon />{" "}
                <Text strong type="danger">
                  Private
                </Text>
              </Flex>
            )}
          </Flex>
          <Flex align="baseline" gap="10px">
            <Title level={5}>Description: </Title>
            <Text italic>{data?.description}</Text>
          </Flex>
        </SideWrapper>
      </Flex>
    </Paper>
  );
};
