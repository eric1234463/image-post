import React, { FC, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from '../../utils/styled';

type Ref =
  | ((instance: HTMLInputElement | null) => void)
  | React.MutableRefObject<HTMLInputElement | null>
  | null;

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  innerRef?: Ref;
  error?: string;
}

const StyledInput = styled.input<{ isError: boolean }>`
  padding-top: 1.5rem;
  outline: none;
  border-bottom: 2px solid ${({ theme, isError }) => isError ? theme.colors.DANGER_500 : theme.colors.GREY_100};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  width: 100%;
  display: flex;
`;

const Label = styled(animated.label) <{ isError: boolean }>`
  font-size: 1rem;
  position: absolute;
  color: ${({ theme, isError }) => isError ? theme.colors.DANGER_500 : theme.colors.PRIMARY_700};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  > span {
    color: ${({ theme }) => theme.colors.DANGER_500};
    display: flex;
  }
`;

const Input: FC<IProps> = (props) => {
  const styledProps = useSpring({
    top: props.value ? '0px' : '24px',
  });

  return (
    <Wrapper>
      <Label data-testid="label" style={styledProps} isError={!!props.error}>{ props.label }</Label>
      <StyledInput data-testid="input" {...props} ref={props.innerRef} isError={!!props.error} autoComplete="off"></StyledInput>
      {props.error && <span data-testid="error-label">{props.error}</span>}
    </Wrapper>
  )
}



export default React.forwardRef<HTMLInputElement, Omit<IProps, 'innerRef'>>(
  (props, ref) => <Input innerRef={ref} {...props} />,
);
