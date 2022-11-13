import { CreateSingleResearchkDto } from "@/generated";
import { FormInstance } from "antd";

type CreateResearchProps = {
  form: FormInstance<CreateSingleResearchkDto>;
  onFinish: (data: CreateSingleResearchkDto) => void;
};
