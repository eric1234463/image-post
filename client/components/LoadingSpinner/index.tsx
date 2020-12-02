import * as React from 'react';
import styled , { ColorName }from '../../utils/styled';
import { rotate, line } from '../../utils/keyframes';

interface IProps {
  color?: ColorName;
  size?: number;
}

const Loading = styled.svg<IProps>`
  > circle {
    fill: none;
    stroke: ${({ color = 'PRIMARY_500', theme }) => theme.colors[color]};
    box-sizing: border-box;
    stroke-width: 0.1875rem;
    transform-origin: 50%;
    animation: ${line} 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite,
      ${rotate} 1.6s linear infinite;
  }
`;

const LoadingSpinner: React.FunctionComponent<IProps> = ({
  color,
  size = 24,
}) => (
  <Loading viewBox="0 0 32 32" width={size} height={size} color={color}>
    <circle cx="16" cy="16" r="14" />
  </Loading>
);

export default LoadingSpinner;
