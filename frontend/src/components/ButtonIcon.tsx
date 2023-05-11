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
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
