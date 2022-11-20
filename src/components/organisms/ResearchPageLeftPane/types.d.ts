import { SingleRead } from "@/generated";

export interface ResearchPageLeftPaneProps {
  name?: string;
  createdAt?: string;
  isCreateMode: boolean;
  preparedData: SingleRead[];
}
