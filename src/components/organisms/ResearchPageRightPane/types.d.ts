export interface ResearchPageRightPaneProps {
  onStart: () => void;
  onSave: () => void;
  onClear: () => void;
  onStop: () => void;
  onSaveLoading: boolean;
  isLabjackFetching: boolean;
  isRunning: boolean;
  hasData: boolean;
}
