import * as React from 'react';
import * as Styled from './Button.styled';
import { ButtonAlignment } from './types';

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  alignment?: keyof typeof ButtonAlignment;
}

const Button: React.FC<OwnProps> = ({ children, alignment = ButtonAlignment.center, ...props }) => {
  return (
    <Styled.Wrapper alignment={alignment}>
      <Styled.Button {...props}>{children}</Styled.Button>
    </Styled.Wrapper>
  );
};

export default Button;
