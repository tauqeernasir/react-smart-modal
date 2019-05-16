import React from "react";

const ModalBody = props => {
  const styles = {
    background: props.bg || "#fff",
    boxSizing: "border-box",
    padding: props.padding || "20px",
    overflow: props.overflow || "auto",
    marginBottom: "60px"
  };

  return <div style={styles}>{props.children}</div>;
};

export default ModalBody;
