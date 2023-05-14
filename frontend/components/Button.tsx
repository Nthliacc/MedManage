import React from 'react';
import styled from 'styled-components';

type ButtonSize ='small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  animate?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return 'var(--light-color)';
      case 'secondary':
        return 'var(--light-blue)';
      case 'tertiary':
        return 'var(--medium-blue)';
      default:
        return 'var(--light-color)';
    }
  }};
  color: ${({ color }) =>
    color === 'primary' ? 'var(--deep-blue)' : 'var(--light-color)'};

  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 16px;
  cursor: pointer;
  
  transform: none !important;
  &:hover {
    font-weight: bold;
    background-color: ${({ color }) => {
      switch (color) {
        case 'primary':
          return 'var(--medium-blue)';
        case 'secondary':
          return 'var(--deep-blue)';
        case 'tertiary':
          return 'var(--dark-blue)';
        default:
          return 'var(--medium-blue)';
      }
    }};

    color: ${({ color }) =>
      color === 'primary' ? 'var(--light-color)' : 'var(--light-color)'};
  }

  &:disabled {
    background-color: var(--light-color);
    color: var(--deep-blue);
    cursor: not-allowed;
  }

  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'width: 40px;';
      case 'medium':
        return 'width: 60px;';
      case 'large':
        return 'width: 100%;';
      default:
        return 'width: auto;';
    }
  }}

  ${({ animate }) => {
    if (animate) {
      return 'animation: pulse 1.5s infinite;';
    }
  }}

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
