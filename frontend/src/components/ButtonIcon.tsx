import styled from 'styled-components';

interface ButtonIconProps {
  icone: string;
  title: string;
  size?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  rest?: any;
}

export default function ButtonIcon({
  icone,
  title,
  size,
  children,
  onClick,
  ...rest
}: ButtonIconProps) {
  return (
    <Button onClick={onClick} {...rest}>
      <img src={icone} alt={title} title={title} height={size} />
      {children}
    </Button>
  );
}

const Button = styled.button`
  background-color: var(--light-color) !important;
  margin: 0;
  color: var(--dark-blue);
  height: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: var(--dark-blue) !important;
    color: var(--light-color);
    transition: 0.5s;
    font-weight: bold;


  }
  img {
    width: 1.5rem;
    height: 60%;
  }

`;
