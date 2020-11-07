import styled, { css } from 'styled-components';
import { ButtonAlignment } from './types';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 20px;
  background-color: #4ca5dd;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background-color 0.25s ease-out;

  &:hover {
    background-color: #4ca5ffde;
  }
`;

export const Wrapper = styled.div<{ alignment: keyof typeof ButtonAlignment }>`
  display: flex;
  width: 100%;

  ${props => props.alignment === ButtonAlignment.center && css`
    justify-content: center;
  `}

  ${props => props.alignment === ButtonAlignment.left && css`
    justify-content: flex-start;
  `}

  ${props => props.alignment === ButtonAlignment.right && css`
    justify-content: flex-end;
  `}
`;
