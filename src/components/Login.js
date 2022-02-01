/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <Wrapper>
      <Form formTitle="Join us!" buttonText="Sign Up" labelText="E-MAIL" />
    </Wrapper>
  );
};

export default Login;
