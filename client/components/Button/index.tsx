import React, { FC } from 'react';
import styled from '../../utils/styled';
import LoadingSpinner from '../LoadingSpinner';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.PRIMARY_500};
  color: ${({ theme }) => theme.colors.WHITE};
  padding: 0.5rem 1rem ;
  display: block;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  > svg {
    display: block;
    margin: auto;
  }

  > span {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

const Button: FC<IProps> = ({ isLoading = false, ...restProps }) => {
  return (
    <StyledButton {...restProps}>
      {isLoading && <LoadingSpinner color="WHITE" size={16}/>}
      <span>{!isLoading && restProps.children}</span>
    </StyledButton>
  )
}

export default Button;
