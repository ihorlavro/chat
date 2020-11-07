import * as React from 'react';
import * as Styled from '../AuthForms.styled';

const LoginForm: React.FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Please login to your account</Styled.Title>
      <Styled.Form>
        <Styled.FormInput type="email" placeholder="Email" />
        <Styled.FormInput type="password" placeholder="Password" />
        <Styled.FormButton type="submit">Login</Styled.FormButton>
        <Styled.Link to="/register">Go to register</Styled.Link>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default LoginForm;
