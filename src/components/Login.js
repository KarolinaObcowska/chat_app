/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import PrimaryButton from './Buttons/PrimaryButton';

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
  width: 450px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  padding: 3rem 2rem;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: 0rem 2rem;
  }
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

const Login = ({ onEmailSubmit }) => {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onEmailSubmit(emailRef.current.value);
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
