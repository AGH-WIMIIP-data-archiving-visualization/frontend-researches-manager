import { Device } from "@/generated";

export interface ResearchPageRightPaneProps {
  onStart: () => void;
  onSave: () => void;
  onClear: () => void;
  onStop: () => void;
  selectDevice: (d?: Device | null) => void;

  onSaveLoading: boolean;
  isLabjackFetching: boolean;
  isRunning: boolean;
  hasData: boolean;
  device?: Device | null;
}
