import React from 'react';
import styled from 'styled-components';
import { FaLocationArrow } from 'react-icons/fa';

const Wrapper = styled.section`
  display: flex;
  width: 50%;
  min-width: 350px;
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
const Messages = styled.div`
  height: 100%;
  overflow: scrollY;
  display: flex;
  flex-direction: column;
`;

const MessageLeft = styled.div`
  background-color: #dc006b;
  width: fit-content;
  align-self: flex-start;
  margin: 1rem 0rem;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 1;
  font-size: 0.7rem;
  border-radius: 10px;
`;
const MessageRight = styled.div`
  background-color: #6b2684;
  width: fit-content;
  align-self: flex-end;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 1;
  font-size: 0.7rem;
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
  width: 100%;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 8px;
`;

const Button = styled.button`
  border-radius: 50%;
  background-color: white;
  margin-left: 1rem;
  width: 2rem;
  height: 2rem;
  color: white;
  border: none;
  background: none;
`;
const NewConversation = () => {
  return (
    <Wrapper>
      <Messages>
        <MessageLeft>asasda asasd asd asd asd asd asd asdasd asd da dasd</MessageLeft>
        <MessageRight>asdasd asdasd asdasdas asdasdasd </MessageRight>
      </Messages>
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
