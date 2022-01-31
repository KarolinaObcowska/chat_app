import React from 'react';
import styled from 'styled-components';
import { FaLocationArrow } from 'react-icons/fa';

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  height: 90vh;
  margin-top: 3rem;
  margin-left: 3rem;
  padding: 1rem;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
`;

const MessageForm = styled.form`
  display: flex;
  width: 100%;
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MessageInput = styled.textarea`
  height: 3rem;
  width: 80%;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 8px;
`;

const Button = styled.button`
  border-radius: 50%;
  background-color: white;
  margin-left: 1rem;
  width: 3rem;
  height: 3rem;
  color: white;
  border: none;
  background: none;
`;
const NewConversation = () => {
  return (
    <Wrapper>
      <MessageForm>
        <FormGroup>
          <MessageInput />
          <Button>
            <FaLocationArrow size="25" />
          </Button>
        </FormGroup>
      </MessageForm>
    </Wrapper>
  );
};

export default NewConversation;
