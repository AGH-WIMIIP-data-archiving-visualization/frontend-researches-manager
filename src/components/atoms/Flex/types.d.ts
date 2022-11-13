type Justify =
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "center"
  | "flex-start"
  | "flex-end";
type Align = "center" | "flex-start" | "flex-end" | "baseline";

export interface FlexProps {
  justify?: Justify;
  align?: Align;
  col?: boolean;
  wrap?: boolean;
  gap?: string | number;
}
