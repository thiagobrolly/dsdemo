import styled from 'styled-components';
import { theme } from '@dsdemo/styles';

export type ModalContentProps = {
  isOpen: boolean;
  widthModal?: string;
} & React.HTMLAttributes<HTMLElement>;

type ModalOverlayProps = {
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEscClick: boolean;
  isOpen: boolean;
};

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.div<ModalContentProps>`
  z-index: ${theme.layers.alwayOnTop};
  transition: ${theme.transition.default};
  width: ${({ widthModal }) => widthModal || 'fit-content'};

  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  color: #1e1d24;
  border-radius: 8px;
`;

export const ModalOverlay = styled.div<ModalOverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: ${theme.transition.default};
`;

export const ModalCloseButton = styled.button`
  margin-left: auto;
  margin-right: -14px;
  margin-top: -14px;
  color: ${theme.color.primary};
  background: transparent;
  border: 0;
  transition: 0.3s;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.gray_500};
  }
`;

export const ModalRoot = styled.div`
  .paylivre-modal-enter {
    opacity: 0;

    ${ModalContent} {
      opacity: 0;
      transform: scale(0);
    }
  }

  .paylivre-modal-enter-active {
    opacity: 1;

    ${ModalContent} {
      opacity: 1;
      transform: scale(1);
    }
  }

  .paylivre-modal-exit {
    opacity: 1;

    ${ModalContent} {
      opacity: 1;
      transform: scale(1);
    }
  }

  .paylivre-modal-exit-active {
    opacity: 0;

    ${ModalContent} {
      opacity: 0;
      transform: scale(0);
    }
  }
`;
