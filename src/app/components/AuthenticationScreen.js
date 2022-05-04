import React from "react";

import styled from "styled-components";
import Login from "./Login";
import SignUp from "./SignUp";

function AuthenticationScreen() {
  return (
    <AuthenticationScreenMain>
      <SignUp />
      <Login />
    </AuthenticationScreenMain>
  );
}

export default AuthenticationScreen;

const AuthenticationScreenMain = styled.section`
  height: calc(100vh - 50px);

  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: #272936;
  justify-content: space-between;
  padding: 0px 40px 0px 40px;
`;
