import React from "react";

const ModalFooter = props => {
  const styles = {
    background: props.bg || "#fff",
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    minHeight: "60px",
    borderTop: "1px solid #eee",
    width: "100%",
    padding: "20px"
  };
  return <div style={styles}>{props.children}</div>;
};

export default ModalFooter;
