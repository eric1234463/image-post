import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import styled from "../../utils/styled";

const Wrapper = styled.div<{ isModalShow: boolean }>`
  display: ${({ isModalShow }) => (isModalShow ? "initial" : "none")};
`;
interface IProps {
  element: JSX.Element;
  isModalShow: boolean;
}

const ModalProvider: FunctionComponent<IProps> = ({ element, isModalShow }) => {
  const modalRoot = document.getElementById("modal-root");

  if (modalRoot) {
    const modalElement = <Wrapper isModalShow={isModalShow}>{element}</Wrapper>;
    return ReactDOM.createPortal(modalElement, modalRoot);
  }

  return null;
};

export default ModalProvider;
