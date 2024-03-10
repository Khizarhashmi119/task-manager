import styled from "styled-components";

import { ITask } from "@/types/Task";
import { plus } from "@/utils/icons";

type Props = {
  title: string;
  tasks: ITask[];
};

function Tasks(props: Props) {
  const { title, tasks } = props;

  return (
    <Container>
      <TitleAndCtaContainer>
        <Title>{title}</Title>
        <AddTaskButton>{plus}</AddTaskButton>
      </TitleAndCtaContainer>
    </Container>
  );
}

const Container = styled.main`
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  flex: 1;
  padding: 2rem;
`;

const TitleAndCtaContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const Title = styled.h1`
  border-bottom: 4px solid ${(props) => props.theme.colorGreenDark};
  padding-bottom: 0.5rem;
`;

const AddTaskButton = styled.button`
  border: none;
  border-radius: 50%;
  height: 40px;
  padding: 0.5rem;
  width: 40px;
`;

export default Tasks;
