import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input, Label, Title } from '../Login';
import PrimaryButton from '../Buttons/PrimaryButton';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const AddContact = () => {
  return (
    <Wrapper>
      <Form>
        <Title>Add new friends</Title>
        <FormGroup>
          <Input />
          <Label>E-MAIL</Label>
        </FormGroup>
        <PrimaryButton buttonType="submit" text="ADD" />
      </Form>
    </Wrapper>
  );
};

export default AddContact;
