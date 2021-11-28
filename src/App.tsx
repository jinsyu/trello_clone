import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoState } from "./atoms";
import Board from "./components/Board";
import DraggableCard from "./components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // setTodos((oldTodos) => {
    //   if (!destination) return oldTodos;
    //   const newTodos = [...oldTodos];
    //   newTodos.splice(source.index, 1);
    //   newTodos.splice(destination?.index, 0, draggableId);
    //   return newTodos;
    // });
  };

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          {Object.keys(todos).map((boardId) => (
            <Board todos={todos[boardId]} boardId={boardId} key={boardId} />
          ))}
        </Boards>
      </DragDropContext>
    </Wrapper>
  );
}

export default App;
