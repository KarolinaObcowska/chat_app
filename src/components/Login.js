/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react';
import Dashboard from './Dashboard';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import PrimaryButton from './Buttons/PrimaryButton';

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  width: 450px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 3rem 2rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0rem 2rem;
  }
`;

export const FormGroup = styled.div`
  position: relative;
`;
export const Input = styled.input`
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
export const Label = styled.label`
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
export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

const Login = () => {
  const [data, setData] = useLocalStorage('email');

  const emailRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setData(emailRef.current.value);
    navigate('/dashboard');
    window.location.reload();
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Join Us!</Title>
        <FormGroup>
          <Input type="email" name="email" ref={emailRef} />
          <Label htmlFor="email">E-MAIL</Label>
        </FormGroup>
        <PrimaryButton buttonType="submit" text="SIGN UP" />
      </Form>
    </Wrapper>
  );
};

export default Login;
