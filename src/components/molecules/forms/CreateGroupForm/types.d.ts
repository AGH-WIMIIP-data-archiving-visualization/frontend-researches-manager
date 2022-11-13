import { CreateGroupResearchkDto } from "@/generated";
import { FormInstance } from "antd";

type CreateGroupProps = {
  form: FormInstance<CreateGroupResearchkDto>;
  onFinish: (data: CreateGroupResearchkDto) => void;
};
