import React, { useState } from "react";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todoSlice";

function LeftSideBar() {
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createTodo(todoText));
    setTodoText("");
  };
  return (
    <LeftSection>
      <WelcomeSection>
        <WelcomeText1>Welcome </WelcomeText1>
        <Username>Harshit Dubey </Username>
        <MailId>hdlikes8@gmail.com</MailId>
      </WelcomeSection>

      <NewTaskContainer onSubmit={submitHandler}>
        <NewTaskHeading>Add a new Task</NewTaskHeading>
        <TodoInput
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
          placeholder="Add your Task here"
        />
        <SubmitButton type="submit">Add</SubmitButton>
      </NewTaskContainer>
      <LogoutButton>
        <LogoutIcon />
        Logout
      </LogoutButton>
    </LeftSection>
  );
}

export default LeftSideBar;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const WelcomeSection = styled.div`
  padding: 30px;
`;

const WelcomeText1 = styled.h1`
  color: white;
  font-size: 20px;
`;
const Username = styled.h1`
  color: white;
  font-size: 30px;
`;

const MailId = styled.div`
  color: white;
  font-size: 15px;
`;

const LogoutButton = styled.button`
  color: #3a58f4;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  font-size: 15px;
  padding: 30px;
`;

const NewTaskContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);

  height: 300px;
  border-radius: 15px;
  margin: 0px 10px 0px 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #333333;
  align-items: center;
  justify-content: space-between;
`;

const TodoInput = styled.textarea`
  border: none;
  background: none;
  font-size: 15px;
  color: white;
  height: 100px;
  margin-top: 10px;
  outline-width: 0;
`;

const NewTaskHeading = styled.div`
  color: white;
  padding: 20px;
`;

const SubmitButton = styled.button`
  height: 25px;
  width: 100px;
  color: white;
  background: #3a58f4;
  border: none;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
