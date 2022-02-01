import React from 'react';
import styled from 'styled-components';
import Form from '../Form';
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
`;
const AddContact = () => {
  return (
    <Wrapper>
      <Form formTitle="Provide an e-mail" labelText="E-MAIL" buttonText="Add contact" />
    </Wrapper>
  );
};

export default AddContact;
