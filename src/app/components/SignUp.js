import React, { useState } from "react";
import styled from "styled-components";
import FaceIcon from "@mui/icons-material/Face";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AuthInputCard from "./AuthInputCard";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const nameHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(username);
    console.log(password);
  };

  return (
    <SignUpScreen>
      <Heading1>START FOR FREE</Heading1>
      <br></br>
      <Heading2>Create new account</Heading2>

      <AuthForm onSubmit={submitHandler}>
        <AuthInputCard
          value={username}
          onChange={nameHandler}
          placeholder={"name"}
          icon={<FaceIcon />}
        />
        <AuthInputCard
          value={email}
          onChange={emailHandler}
          placeholder={"email"}
          icon={<AlternateEmailIcon />}
        />
        <AuthInputCard placeholder={"password"} icon={<KeyIcon />} />
        <AuthInputCard
          value={password}
          onChange={passwordHandler}
          placeholder={"Confirm password"}
          icon={<KeyIcon />}
        />

        <AuthButton type="submit">SignUp</AuthButton>
      </AuthForm>
    </SignUpScreen>
  );
}

export default SignUp;

const SignUpScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: left;
`;

const Heading1 = styled.h2`
  font-size: 15px;
  color: #5e6573;
`;

const Heading2 = styled.h2`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 55px;
`;

const AuthForm = styled.form`
  margin-top: 40px;
`;

const AuthButton = styled.button`
  border: none;
  color: white;
  background-color: #1d8ff4;
  border-radius: 30px;
  width: 150px;
  height: 35px;
  margin: 20px 0px 0px 130px; //top right bottom left
`;
