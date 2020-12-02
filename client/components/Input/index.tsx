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
}

const StyledInput = styled.input`
  padding-top: 1.5rem;
  outline: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.GREY_100};
  border-top: 0;
  border-left: 0;
  border-right: 0;
  width: 100%;
`;

const Label = styled(animated.label)`
  font-size: 1rem;
  position: absolute;
  color: ${({ theme }) => theme.colors.PRIMARY_700};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const Input: FC<IProps> = (props) => {
  const styledProps = useSpring({
    bottom: props.value ? '24px' : '4px',
  });

  return (
    <Wrapper>
      <Label style={styledProps}>{props.label}</Label>
      <StyledInput {...props} ref={props.innerRef} autoComplete="off"></StyledInput>
    </Wrapper>
  )
}



export default React.forwardRef<HTMLInputElement, Omit<IProps, 'innerRef'>>(
  (props, ref) => <Input innerRef={ref} {...props} />,
);
