/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  z-index: 10;
  flex-direction: column;
  color: white;
  width: 300px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10%;
  padding: 3rem 2rem;
  justify-content: space-between;
`;
const FormGroup = styled.div`
  position: relative;
`;
const Input = styled.input`
  margin: 1rem 0rem;
  padding: 1rem;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: #ffffffb0;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
  opacity: 0.6;
  position: absolute;
  top: 35px;
  left: 0px;
  pointer-events: none;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    top: 10px;
    font-size: 12px;
    opacity: 1;
  }
`;
const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;
const Button = styled.button`
  color: white;
  margin-top: 2rem;
  padding: 1rem 0rem;
  text-transform: uppercase;
  background: none;
  border: 1px solid white;
  border-radius: 10px;
`;

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Join us!</Title>
        <FormGroup>
          <Input type="email" name="email" />
          <Label for="email">E-MAIL</Label>
        </FormGroup>
        <Button>Sign up</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
