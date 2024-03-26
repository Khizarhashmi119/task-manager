"use client";
import { useUser } from "@clerk/nextjs";
import styled from "styled-components";

import CircularLoader from "@/components/CircularLoader";
import Sidebar from "@/components/Sidebar";

type Props = React.PropsWithChildren<{}>;

function Layout({ children }: Props) {
  const { isLoaded } = useUser();

  if (!isLoaded)
    return (
      <CircularLoaderContainer>
        <CircularLoader $size="50px" />
      </CircularLoaderContainer>
    );

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

const CircularLoaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export default Layout;
