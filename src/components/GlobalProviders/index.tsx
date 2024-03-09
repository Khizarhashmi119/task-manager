"use client";
import * as React from "react";
import styled from "styled-components";

import ThemeProvider from "../ThemeProvider";

type Props = React.PropsWithChildren<{}>;

function GlobalProviders(props: Props) {
  const { children } = props;

  return (
    <ThemeProvider>
      <GlobalContainer>{children}</GlobalContainer>
    </ThemeProvider>
  );
}

const GlobalContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 2.5rem;
  height: 100%;
`;

export default GlobalProviders;
