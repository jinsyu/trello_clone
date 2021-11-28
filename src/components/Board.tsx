import React, { ReactElement } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const BoardContainer = styled.div`
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
  );
}

export default Board;
