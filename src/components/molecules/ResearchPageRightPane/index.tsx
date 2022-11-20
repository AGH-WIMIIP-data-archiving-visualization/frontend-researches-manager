import { Flex } from "@/src/components";
import {
  ClearOutlined,
  PlayCircleOutlined,
  SaveOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import { RightPane } from "./styles";
import { ResearchPageRightPaneProps } from "./types";
const { Title } = Typography;

export const ResearchPageRightPane: React.FC<ResearchPageRightPaneProps> = ({
  onSaveLoading,
  onClear,
  onSave,
  onStart,
  onStop,
  hasData,
  isLabjackFetching,
  isRunning,
}) => {
  return (
    <RightPane>
      <Flex col gap="20px" justify="center">
        <Title level={4}> Panel</Title>
        <Button
          icon={<PlayCircleOutlined />}
          onClick={onStart}
          type="primary"
          size="large"
          loading={isLabjackFetching && isRunning}
        >
          Start Research
        </Button>

        <Button
          icon={<StopOutlined />}
          disabled={!isLabjackFetching}
          loading={isLabjackFetching && !isRunning}
          onClick={onStop}
          type="primary"
          size="large"
        >
          Stop
        </Button>
        <Button
          disabled={!hasData}
          icon={<ClearOutlined />}
          onClick={onClear}
          type="primary"
          size="large"
        >
          Clear
        </Button>
        <Button
          disabled={!hasData || isLabjackFetching}
          loading={onSaveLoading}
          icon={<SaveOutlined />}
          onClick={onSave}
          type="primary"
          size="large"
        >
          Save
        </Button>
      </Flex>
    </RightPane>
  );
};
