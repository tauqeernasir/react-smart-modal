import React from "react";
import ModalContext from "./ModalContext";
import Portal from "./Portal";
import BackDrop from "./components/BackDrop";

const ModalProvider = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [Component, setComponent] = React.useState(null);

  const openModal = component => {
    setIsOpen(true);
    setComponent(component);
  };

  const closeModal = () => {
    setIsOpen(false);
    setComponent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal
      }}
    >
      {props.children}
      {isOpen && <BackDrop onClick={() => closeModal()} />}
      {isOpen && Component && <Portal>{Component}</Portal>}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
