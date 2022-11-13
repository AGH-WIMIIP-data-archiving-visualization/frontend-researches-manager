type CSSValue = string | number;

type SpaceProps = {
  m?: CSSValue;
  mx?: CSSValue;
  my?: CSSValue;
  p?: CSSValue;
  px?: CSSValue;
  py?: CSSValue;
};

type CSSSpaceProperty =
  | "margin-left"
  | "margin-right"
  | "margin"
  | "margin-top"
  | "margin-bottom"
  | "padding-left"
  | "padding-right"
  | "padding"
  | "padding-top"
  | "padding-bottom";

type SpacePropsSpaceMap = Record<
  keyof SpaceProps,
  [CSSSpaceProperty, CSSSpaceProperty?]
>;

export type BoxProps = SpaceProps & {
  bgColor?: string;
  fullH?: boolean;
  fullW?: boolean;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
};
