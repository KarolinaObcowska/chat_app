/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Input, Label, Title } from '../Login';
import PrimaryButton from '../Buttons/PrimaryButton';
import { GrFormClose } from 'react-icons/gr';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 9;
  justify-content: center;
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    backdrop-filter: blur(10px) saturate(160%);
    -webkit-backdrop-filter: blur(10px) saturate(160%);
  }
`;

const CustomForm = styled(Form)`
  background: #dc006bef;
`;
const AddContact = ({ setIsOpen }) => {
  return (
    <Wrapper>
      <CustomForm>
        <GrFormClose onClick={() => setIsOpen(false)} />
        <Title>Add new friend</Title>
        <FormGroup>
          <Input />
          <Label>E-MAIL</Label>
        </FormGroup>
        <PrimaryButton callback={() => setIsOpen(false)} text="ADD" />
      </CustomForm>
    </Wrapper>
  );
};

export default AddContact;
