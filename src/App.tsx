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
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (source.droppableId === destination?.droppableId) {
      setTodos((allBoards) => {
        if (!destination) return allBoards;
        const newBoard = [...allBoards[source.droppableId]];
        newBoard.splice(source.index, 1);
        newBoard.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId]: newBoard,
        };
      });
    }
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
