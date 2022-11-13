import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { CreateGroupProps } from "./types";

export const CreateGroupForm: React.FC<CreateGroupProps> = ({
  form,
  onFinish,
}) => {
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
        label={"Group Name"}
        name="groupResearchName"
        rules={[{ required: true, message: "Group Name is required" }]}
      >
        <Input size="large" placeholder={"Name"} />
      </Form.Item>
      <Form.Item
        label={"Description"}
        name="description"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <TextArea size="large" placeholder={"Name"} />
      </Form.Item>
    </Form>
  );
};
