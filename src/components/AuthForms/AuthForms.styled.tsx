import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Input from 'components/Input';
import Button from 'components/Button';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 430px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.04204);
  border-radius: 3px;
  padding: 45px;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #202002;
  margin-bottom: 50px;
  text-align: center;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 25px;
  }
`;

export const FormButton = styled(Button)`
  margin-bottom: 30px;
`;

export const Link = styled(RouterLink)`
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #adadad;
  transition: background-color 0.25s ease-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #4ca5ffde;
  }
`;
