import React from 'react';
import styled from 'styled-components';

enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

type ButtonColor = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  animate?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
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
  transition: 0.3s;
  &:hover {
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
  }

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
