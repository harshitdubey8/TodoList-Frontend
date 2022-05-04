import React from "react";
import styled from "styled-components";
import FaceIcon from "@mui/icons-material/Face";
import KeyIcon from "@mui/icons-material/Key";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AuthInputCard from "./AuthInputCard";

function SignUp() {
  return (
    <SignUpScreen>
      <Heading1>START FOR FREE</Heading1>
      <br></br>
      <Heading2>Create new account</Heading2>

      <AuthForm>
        <AuthInputCard placeholder={"name"} icon={<FaceIcon />} />
        <AuthInputCard placeholder={"email"} icon={<AlternateEmailIcon />} />
        <AuthInputCard placeholder={"password"} icon={<KeyIcon />} />
        <AuthInputCard placeholder={"Confirm password"} icon={<KeyIcon />} />

        <AuthButton>SignUp</AuthButton>
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