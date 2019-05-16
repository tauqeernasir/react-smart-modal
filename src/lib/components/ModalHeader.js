import React from "react";
import ModalContext from "../ModalContext";

const ModalHeader = props => {
  const styles = {
    boxSizing: "border-box",
    borderBottom: "1px solid #eee",
    width: "100%",
    padding: "0 20px",
    fontWeight: 600,
    lineHeight: "40px",
    position: "relative",
    background: props.bg || "#fff",
    color: props.textColor || "#000"
  };

  const closeButtonStyles = {
    position: "absolute",
    right: "20px",
    top: 0,
    fontSize: "1.5rem",
    color: props.textColor,
    cursor: "pointer"
  };

  return (
    <div style={styles}>
      {props.children}
      {props.closeButton && (
        <ModalContext.Consumer>
          {({ closeModal }) => {
            return (
              <span style={closeButtonStyles} onClick={() => closeModal()}>
                &times;
              </span>
            );
          }}
        </ModalContext.Consumer>
      )}
    </div>
  );
};

export default ModalHeader;
