import { CreateDeviceDto, Device } from "@/generated";
import { useGetDevices } from "@/src/api";
import { Flex } from "@/src/components";
import {
  ClearOutlined,
  PlayCircleOutlined,
  SaveOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Typography } from "antd";
import { useState } from "react";
import { RightPane } from "./styles";
import { ResearchPageRightPaneProps } from "./types";
const { Title } = Typography;
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const ResearchPageRightPane: React.FC<ResearchPageRightPaneProps> = ({
  onSaveLoading,
  onClear,
  onSave,
  onStart,
  onStop,
  hasData,
  isLabjackFetching,
  isRunning,
  selectDevice,
  device,
}) => {
  const [customDevice, setCustomDevice] = useState(false);
  const { data: devices } = useGetDevices();
  const [form] = Form.useForm<CreateDeviceDto>();
  return (
    <RightPane>
      <Flex col gap="10px">
        <Title level={4}> Device Manager</Title>
        <Select
          value={device?.id}
          disabled={isLabjackFetching || customDevice}
          onSelect={(e: null | string) => {
            selectDevice(e ? devices?.filter((p) => p.id === e)[0] : null);
          }}
          placeholder="Select Device"
        >
          <Select.Option key={"cancel"} value={null}>{``}</Select.Option>
          {devices?.map((d, index) => (
            <Select.Option key={index} value={d.id}>
              {d.deviceName}
            </Select.Option>
          ))}
        </Select>
        <Checkbox
          onChange={() => {
            setCustomDevice((prev) => {
              if (!prev) {
                selectDevice(null);
              }
              return !prev;
            });
          }}
          checked={customDevice}
        >
          Custom Device
        </Checkbox>
        {customDevice && (
          <Form
            preserve={false}
            name="group"
            layout="vertical"
            form={form}
            scrollToFirstError
            onFinish={(e: CreateDeviceDto) => {
              selectDevice({
                id: "Custom Device",
                deviceInput: e.deviceInput,
                deviceName: "Custom Device",
                scalingFunction: e.scalingFunction,
                unit: e.unit,
              });
            }}
          >
            <Form.Item
              label={"Scaling Function"}
              name="scalingFunction"
              rules={[
                { required: true, message: "Scaling function is required" },
              ]}
            >
              <Input size="large" placeholder={"2*x +3"} />
            </Form.Item>

            <Form.Item
              label={"Unit - x label"}
              name="unit"
              rules={[{ required: true, message: "Unit is required" }]}
            >
              <Input size="large" placeholder={"VOLTAGE [V]"} />
            </Form.Item>

            <Form.Item
              label={"Device pin input"}
              name="deviceInput"
              rules={[
                { required: true, message: "Device pin input is required" },
              ]}
            >
              <Select placeholder="0-10">
                {numbers.map((number, index) => (
                  <Select.Option key={index} value={number}>
                    {number}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Device
            </Button>
          </Form>
        )}
      </Flex>
      {device && (
        <Flex col gap="20px" justify="center">
          <Title level={4}> Research Panel</Title>
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
      )}
    </RightPane>
  );
};
