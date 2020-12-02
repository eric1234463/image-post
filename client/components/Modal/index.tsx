import * as React from 'react';
import styled from '../../utils/styled';
import CrossIcon from '../Icons/Cross';

interface IProps {
  title?: string;
  onClose: () => void;
  renderFooter?: () => JSX.Element;
}

const OuterWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.BLACK};
  opacity: 0.3;
`;

const InnerWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 40rem;
  max-height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: 0 2rem 3rem 0 ${({ theme }) => theme.colors.SHADOW_500},
    0 0.125rem 1rem 0 ${({ theme }) => theme.colors.SHADOW_600};
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.125rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const HeaderTitle = styled.p`
  display: inline-block;
  margin: 0;
  color: ${({ theme }) => theme.colors.GREY_200};
  font-size: 1.125rem;
  font-weight: 600;
`;

const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Body = styled.div`
  padding: 2rem;
  overflow: auto;
  font-size: 1rem;
  line-height: 1.5rem;

  > * {
    margin: 0;
  }
`;

const Footer = styled.div`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.WHITE};
  text-align: right;

  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Modal: React.FunctionComponent<IProps> = ({
  title,
  onClose,
  children,
  renderFooter,
}) => (
    <OuterWrapper>
      <Overlay onClick={onClose} />
      <InnerWrapper >
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
          <CloseIconWrapper onClick={onClose}>
            <CrossIcon />
          </CloseIconWrapper>
        </Header>
        <Body>{children}</Body>
        {renderFooter && <Footer>{renderFooter()}</Footer>}
      </InnerWrapper>
    </OuterWrapper>
  );

export default Modal;
