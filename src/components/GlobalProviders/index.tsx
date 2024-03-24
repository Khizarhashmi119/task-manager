"use client";
import * as React from "react";

import ThemeProvider from "../ThemeProvider";

type Props = React.PropsWithChildren<{}>;

function GlobalProviders(props: Props) {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default GlobalProviders;
