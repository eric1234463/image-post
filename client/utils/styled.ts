import React from "react";
import baseStyled, {
  css as _css,
  ThemeContext as _ThemeContext,
  ThemedStyledInterface,
  ThemedCssFunction,
  StyledComponent as _StyledComponent,
  createGlobalStyle as _createGlobalStyle,
} from "styled-components";

export type ColorName =
  | "YELLOW_100"
  | "WHITE"
  | "BLACK"
  | "GREY_50"
  | "GREY_100"
  | "GREY_200"
  | "PRIMARY_500"
  | "PRIMARY_700"
  | "PRIMARY_200"
  | "SHADOW_500"
  | "SHADOW_400"
  | "SHADOW_600";

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
    PRIMARY_700: "#184e89",
    PRIMARY_500: "#2583fd",
    PRIMARY_200: "rgba(24, 78, 137, 0.12)",
    SHADOW_500: "rgba(54, 62, 81, 0.1)",
    SHADOW_400: "rgba(54, 62, 81, 0.05)",
    SHADOW_600: "rgba(54, 62, 81, 0.2)",
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

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
