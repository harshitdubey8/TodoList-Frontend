import React from "react";

import styled from "styled-components";

function AuthInputCard(props) {
  return (
    <CardContainer>
      <InputHeading>{props.placeholder}</InputHeading>
      <InputContainer>
        <InputField />
        <InputIcon>{props.icon}</InputIcon>
      </InputContainer>
    </CardContainer>
  );
}

export default AuthInputCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  border-radius: 15px;
  margin: 0px 10px 0px 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: #313543;
  padding: 15px;
`;

const InputHeading = styled.div`
  color: #5e6573;
  font-size: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputField = styled.input`
  border: none;
  background: none;
  color: white;
  width: 100%;
  font-size: 14px;
  outline-width: 0;
`;

const InputIcon = styled.div`
  color: #70737d;
  background: none;
`;
