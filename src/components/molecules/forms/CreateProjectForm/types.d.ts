import { CreateProjectDto } from "@/generated";
import { FormInstance } from "antd";

type CreateProjectProps = {
  form: FormInstance<CreateProjectDto>;
  onFinish: (data: CreateProjectDto) => void;
};
