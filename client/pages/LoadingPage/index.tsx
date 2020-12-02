import React from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import styled from "../../utils/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.PRIMARY_700};
  height: 100vh;
  width: 100vw;
  display: flex;

  svg {
    display: flex;
    margin: auto;
    width: 90px;
    height: 90px;
  }
`;

const LoadingPage: React.FC = () => {
  return (
    <Container>
      <LoadingSpinner color="PRIMARY_500" size={90}></LoadingSpinner>
    </Container>
  );
};

export default LoadingPage;
