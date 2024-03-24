"use client";
import styled from "styled-components";

import Sidebar from "@/components/Sidebar";

type Props = React.PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 2.5rem;
  padding: 2.5rem;
`;

export default Layout;
