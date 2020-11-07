import * as React from 'react';
import * as Styled from './Input.styled';

interface OwnProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  error?: boolean;
  success?: boolean;
}

const Input: React.FC<OwnProps> = props => {
  return <Styled.Input {...props} />;
};

export default Input;
