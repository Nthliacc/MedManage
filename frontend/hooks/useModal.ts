import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalFooter, setModalFooter] = useState<React.ReactNode>(null);
  const [onClose, setOnClose] = useState<() => void>(() => {});

  const openModal = (
    content: React.ReactNode,
    title: string,
    footer: React.ReactNode,
    onClose: () => void
  ) => {
    setModalContent(content);
    setModalTitle(title);
    setModalFooter(footer);
    setOnClose(() => onClose);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
    setModalTitle('');
    setModalFooter(null);
    setOnClose(() => {});
  };

  return {
    isOpen,
    modalContent,
    modalTitle,
    modalFooter,
    openModal,
    closeModal,
    onClose
  };
};

export default useModal;
