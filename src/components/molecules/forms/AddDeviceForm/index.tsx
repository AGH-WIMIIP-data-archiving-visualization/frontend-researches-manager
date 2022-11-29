import { Form, Input, Select } from "antd";
import { index } from "mathjs";
import { AddDeviceProps } from "./types";
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const AddDeviceForm: React.FC<AddDeviceProps> = ({ form, onFinish }) => {
  return (
    <Form
      preserve={false}
      name="group"
      layout="vertical"
      form={form}
      scrollToFirstError
      onFinish={onFinish}
    >
      <Form.Item
        label={"Device Name"}
        name="deviceName"
        rules={[{ required: true, message: "Device Name is required" }]}
      >
        <Input size="large" placeholder={"Name"} />
      </Form.Item>
      <Form.Item
        label={"Scaling Function"}
        name="scalingFunction"
        rules={[{ required: true, message: "Scaling function is required" }]}
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
        rules={[{ required: true, message: "Device pin input is required" }]}
      >
        <Select placeholder="0-10">
          {numbers.map((number, index) => (
            <Select.Option key={index} value={number}>
              {number}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
