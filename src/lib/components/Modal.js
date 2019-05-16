import React from "react";

const BasicModal = props => {
  const styles = {
    display: "flex",
    overflow: "hidden",
    borderRadius: props.roundCorners ? "8px" : "none",
    flexDirection: "column",
    background: "white",
    border: "1px solid #d0cccc",
    boxShadow: "0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17)",
    margin: "auto",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: props.width || "60%",
    height: props.height || 400
  };

  return <div style={styles}>{props.children}</div>;
};

export default BasicModal;
