import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffffff8e;
`;
const Hero = () => {
  return (
    <Wrapper>
      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Title>Start chatting with your friends!</Title>
    </Wrapper>
  );
};

export default Hero;
