/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input, Label, Title } from '../Login';
import PrimaryButton from '../Buttons/PrimaryButton';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: fixed;
  top: 0;
  left: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: #ffffff6e;
  backdrop-filter: blur(10px) saturate(160%);
`;
const AddContact = ({ setIsOpen }) => {
  return (
    <Wrapper onClick={() => setIsOpen(false)}>
      <Form>
        <Title>Add new friends</Title>
        <FormGroup>
          <Input />
          <Label>E-MAIL</Label>
        </FormGroup>
        <PrimaryButton callback={() => setIsOpen(false)} text="ADD" />
      </Form>
    </Wrapper>
  );
};

export default AddContact;
