"use client";
import styled from "styled-components";

import "@/styles/globals.scss";

type Props = React.PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 2.5rem;
`;

export default Layout;
