import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectCompletedTodos,
  selectTodos,
  todoCompleteStatus,
  todoUncompleteStatus,
} from "../features/todoSlice";
import LeftSideBar from "./LeftSideBar";

import TodoCard from "./TodoCard";

function Home() {
  const todos = useSelector(selectTodos);
  const completedTodos = useSelector(selectCompletedTodos);

  const dispatch = useDispatch();

  return (
    <HomeScreen>
      <LeftSide>
        <LeftSideBar />
      </LeftSide>
      <RightSide>
        <Heading>Tasks To Be Done</Heading>
        <Todos>
          {todos.map((todo) => (
            <TodoCard
              onClick={() => dispatch(todoCompleteStatus(todo.id))}
              key={todo.id}
              text={todo.title}
              status={todo.status}
            />
          ))}
        </Todos>

        <Heading>Completed Tasks</Heading>
        <CompletedTodos>
          {completedTodos.map((todo) => (
            <TodoCard
              onClick={() => dispatch(todoUncompleteStatus(todo.id))}
              key={todo.id}
              text={todo.title}
              status={todo.status}
            />
          ))}
        </CompletedTodos>
      </RightSide>
    </HomeScreen>
  );
}

export default Home;

const HomeScreen = styled.section`
  height: calc(100vh - 50px);

  display: flex;
  flex-direction: row;
  overflow: hidden;

  /* background-color: #262626; */
  background-color: #272936;
`;

const Todos = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  overflow-y: scroll;
  flex: 0.5;
  overflow-x: hidden;
`;

const Heading = styled.div`
  font-size: 30px;
  font-family: "Secular One", sans-serif;
  margin-left: 13px;
  color: white;
`;

const LeftSide = styled.div`
  /* background-color: #232323; */
  background-color: rgba(39, 41, 54, 1);
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
const RightSide = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex: 1;
  flex-direction: column;
`;

const CompletedTodos = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  flex: 0.5;
  overflow-y: scroll;
  overflow-x: hidden;
`;
