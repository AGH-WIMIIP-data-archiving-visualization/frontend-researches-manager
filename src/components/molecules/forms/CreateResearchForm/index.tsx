import { Form, Input } from "antd";
import { CreateResearchProps } from "./types";

export const CreateResearchForm: React.FC<CreateResearchProps> = ({
  form,
  onFinish,
}) => {
  return (
    <Form
      preserve={false}
      name="research"
      layout="vertical"
      form={form}
      scrollToFirstError
      onFinish={onFinish}
    >
      <Form.Item
        label={"Research Name"}
        name="singleResearchName"
        rules={[{ required: true, message: "Research Name is required" }]}
      >
        <Input size="large" placeholder={"Name"} />
      </Form.Item>
    </Form>
  );
};
