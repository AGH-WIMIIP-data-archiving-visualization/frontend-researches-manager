import { Form, Input, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { CreateProjectProps } from "./types";

export const CreateProjectForm: React.FC<CreateProjectProps> = ({
  form,
  onFinish,
}) => {
  return (
    <Form
      preserve={false}
      name="test"
      layout="vertical"
      form={form}
      scrollToFirstError
      onFinish={onFinish}
    >
      <Form.Item
        label={"Project Name"}
        name="projectName"
        rules={[{ required: true, message: "Project Name is required" }]}
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

      <Form.Item
        label={"Access"}
        name="isPublic"
        rules={[{ required: true, message: "Access radio is required" }]}
      >
        <Radio.Group>
          <Radio value={true}>Public</Radio>
          <Radio value={false}>Private</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
