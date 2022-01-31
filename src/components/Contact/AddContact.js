import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Label = styled.input``;
const Button = styled.button``;

const AddContact = () => {
  return (
    <Wrapper>
      <Form>
        <Label>E-mail: </Label>
        <Input />
        <Button>ADD</Button>
      </Form>
    </Wrapper>
  );
};

export default AddContact;
