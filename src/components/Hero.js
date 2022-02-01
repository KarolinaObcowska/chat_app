import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff8e;
  text-align: center;
  padding: 0rem 2rem;
`;

const Button = styled(Link)`
  color: #ffffff8e;
  margin-top: 2rem;
  text-align: center;
  text-decoration: none;
  width: 10rem;
  z-index: 100;
  coursor: pointer;
  padding: 0.5rem 0rem;
  text-transform: uppercase;
  background: none;
  border: 1px solid #ffffff8e;
  border-radius: 10px;
  &:hover {
    border: 1px solid white;
    color: white;
    background: rgba(255, 255, 255, 0.3);
  }
`;
const Hero = () => {
  return (
    <Wrapper>
      <div className="circles">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
      <Title>Start chatting with your friends!</Title>
      <Button to="/login">Sign up</Button>
    </Wrapper>
  );
};

export default Hero;
