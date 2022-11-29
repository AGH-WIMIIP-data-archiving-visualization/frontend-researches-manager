import { CreateDeviceDto } from "@/generated";
import { FormInstance } from "antd";

type AddDeviceProps = {
  form: FormInstance<CreateDeviceDto>;
  onFinish: (data: CreateDeviceDto) => void;
};
