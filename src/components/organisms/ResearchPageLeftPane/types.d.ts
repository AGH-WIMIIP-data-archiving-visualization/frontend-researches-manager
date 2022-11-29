import { SingleRead, SingleResearch } from "@/generated";

export interface ResearchPageLeftPaneProps {
  data?: SingleResearch;
  isCreateMode: boolean;
  preparedData: SingleRead[];
  Xlabel?: string;
}
