import React from 'react';
import { theme } from '../../utils/styled';

export interface IconProps {
  color?: string;
  size?: number
}

const CrossIcon: React.FunctionComponent<IconProps> = ({
  size = 16,
  color = theme.colors.BLACK,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={size}
    height={size}
    color={color}
  >
    <path
      fillRule="evenodd"
      d="M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z"
    />
  </svg>
);

export default CrossIcon;
