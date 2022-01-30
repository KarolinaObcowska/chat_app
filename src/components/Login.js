/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100%;
  z-index: 100;
  margin-top: 10rem;
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
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10%;
  padding: 2rem;
  justify-content: space-between;
`;
const Input = styled.input`
  margin: 1rem 0rem;
  padding: 1rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  color: #ffffffb0;
`;
const Label = styled.label`
  opacity: 0.6;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  opacity: 0.6;
`;
const Button = styled.button`
  color: #ffffffb0;
  padding: 1rem 0rem;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Join us!</Title>
        <Input placeholder="E-MAIL" />
        <Button>Sign up</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
