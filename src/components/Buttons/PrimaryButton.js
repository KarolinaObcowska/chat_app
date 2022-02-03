/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: white;
  coursor: pointer;
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
  @media (max-width: 768px) {
    &:hover {
      background: none;
    }
  }
`;

const PrimaryButton = ({ text, buttonType, callback, className }) => {
  return (
    <Button type={buttonType} className={className} onClick={callback}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
