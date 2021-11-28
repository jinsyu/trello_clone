import React, { ReactElement } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

interface Props {
  todo: string;
  index: number;
}

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

function DraggableCard({ todo, index }: Props): ReactElement {
  return (
    <Draggable draggableId={todo} key={todo} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {todo}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
