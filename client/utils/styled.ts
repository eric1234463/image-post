import React from "react";
import baseStyled, {
  css as _css,
  ThemeContext as _ThemeContext,
  ThemedStyledInterface,
  ThemedCssFunction,
  StyledComponent as _StyledComponent,
} from "styled-components";

export type ColorName = "YELLOW_100" | "WHITE" | "BLACK" | "GREY_50" | "GREY_100" | "GREY_200";

export type Colors = {
  [key in ColorName]: string;
};

interface Theme {
  colors: Colors;
}

export const theme: Theme = {
  colors: {
    YELLOW_100: "#ffb400",
    WHITE: "#fff",
    GREY_50: "#E4E5E6",
    GREY_100: "#F8F8F8",
    GREY_200: "#636366",
    BLACK: "#1d1d1f",
  },
};

const styled: ThemedStyledInterface<Theme> = baseStyled;

export const css: ThemedCssFunction<Theme> = _css;
export const ThemeContext: React.Context<Theme> = _ThemeContext;
export type StyledComponent<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  E extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  // eslint-disable-next-line @typescript-eslint/ban-types
  P extends {}
> = _StyledComponent<E, Theme, P, never>;
export default styled;
