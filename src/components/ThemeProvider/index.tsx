"use client";
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import themes, { ThemeType } from "./themes";

const ThemeContext = React.createContext<{
  selectedTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  selectedTheme: "dark",
  setTheme: () => {},
});

type Props = React.PropsWithChildren<{}>;

function ThemeProvider(props: Props) {
  const { children } = props;

  const [selectedTheme, setTheme] = React.useState<ThemeType>("dark");

  return (
    <ThemeContext.Provider value={{ selectedTheme, setTheme }}>
      <StyledThemeProvider theme={themes[selectedTheme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);

export default ThemeProvider;
