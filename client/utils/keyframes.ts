import { keyframes, Keyframes } from 'styled-components';


export const rotate: Keyframes = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(450deg);
  }
`;

export const line: Keyframes = keyframes`
  0% {
    stroke-dasharray: 2, 85.964;
    transform: rotate(0);
  }

  50% {
    stroke-dasharray: 65.973, 21.9911;
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dasharray: 2, 85.964;
    stroke-dashoffset: -65.973;
    transform: rotate(90deg);
  }
`;
