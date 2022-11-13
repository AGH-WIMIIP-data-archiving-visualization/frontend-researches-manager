import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BoxProps, SpacePropsSpaceMap } from "./types";

const cssSpaceMap: SpacePropsSpaceMap = {
  m: ["margin"],
  mx: ["margin-left", "margin-right"],
  my: ["margin-top", "margin-bottom"],
  p: ["padding"],
  px: ["padding-left", "padding-right"],
  py: ["padding-top", "padding-bottom"],
};

export const Box = styled.div<BoxProps>`
  ${(p) =>
    p.m &&
    cssSpaceMap.m.map(
      (property) => css`
        ${property}: ${p.m};
      `
    )}

  ${(p) =>
    p.mx &&
    cssSpaceMap.mx.map(
      (property) => css`
        ${property}: ${p.mx};
      `
    )}

    ${(p) =>
    p.my &&
    cssSpaceMap.my.map(
      (property) => css`
        ${property}: ${p.my};
      `
    )}

    ${(p) =>
    p.p &&
    cssSpaceMap.p.map(
      (property) => css`
        ${property}: ${p.p};
      `
    )}

    ${(p) =>
    p.px &&
    cssSpaceMap.px.map(
      (property) => css`
        ${property}: ${p.px};
      `
    )}

    ${(p) =>
    p.py &&
    cssSpaceMap.py.map(
      (property) => css`
        ${property}: ${p.py};
      `
    )}

    ${(p) =>
    p.bgColor &&
    css`
      background-color: ${p.bgColor};
    `}

    ${(p) =>
    p.fullH &&
    css`
      height: 100%;
    `}
    
    ${(p) =>
    p.fullW &&
    css`
      width: 100%;
    `}

    ${(p) =>
    p.minWidth &&
    css`
      min-width: ${p.minWidth};
    `}
    
    ${(p) =>
    p.minHeight &&
    css`
      min-height: ${p.minHeight};
    `}


        ${(p) =>
    p.maxWidth &&
    css`
      max-width: ${p.maxWidth};
    `}
    
    ${(p) =>
    p.maxHeight &&
    css`
      max-height: ${p.maxHeight};
    `}
`;
