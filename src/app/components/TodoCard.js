import React from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";

function TodoCard(props) {
  return (
    <CardContainer {...props}>
      <Card>
        <TodoText>{props.text}</TodoText>
        <EditButton>
          <EditIcon />
        </EditButton>
      </Card>
    </CardContainer>
  );
}

export default TodoCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  /* border: solid 1px; */
  border-radius: 15px;
  margin: 0px 10px 0px 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #333333;
`;

const Card = styled.div`
  padding: 20px;
  display: flex;

  justify-content: space-between;
`;
const TodoText = styled.div`
  font-size: 20px;
  color: white;
`;

const EditButton = styled.button`
  color: white;
  background: none;
  border: none;
`;
