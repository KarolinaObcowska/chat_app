/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
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
  font-weight: 1;
  border-radius: 10px;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Form = ({ formTitle, labelText, buttonText }) => {
  return (
    <FormContainer>
      <Title>{formTitle}</Title>
      <FormGroup>
        <Input type="email" name="email" />
        <Label for="email">{labelText}</Label>
      </FormGroup>
      <Button>{buttonText}</Button>
    </FormContainer>
  );
};

export default Form;
