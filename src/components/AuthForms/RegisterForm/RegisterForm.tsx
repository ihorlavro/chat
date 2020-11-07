import * as React from 'react';
import * as Styled from '../AuthForms.styled';

const RegisterForm: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>To enter the chat, you need to register</Styled.Title>
      <Styled.Form>
        <Styled.FormInput type="email" placeholder="Email" />
        <Styled.FormInput type="text" placeholder="Your name" />
        <Styled.FormInput type="password" placeholder="Password" />
        <Styled.FormInput type="password" placeholder="Repeat password" />
        <Styled.FormButton type="submit">Register</Styled.FormButton>
        <Styled.Link to="/login">Go to login</Styled.Link>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default RegisterForm;
