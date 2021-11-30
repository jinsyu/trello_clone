import React, { ReactElement } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const BoardContainer = styled.h2`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

interface Props {
  todos: string[];
  boardId: string;
}

function Board({ todos, boardId }: Props): ReactElement {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(provided) => (
          <BoardContainer ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <DraggableCard todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </BoardContainer>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
