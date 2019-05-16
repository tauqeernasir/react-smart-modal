import React from "react";

const BackDrop = props => {
  const styles = {
    backgroundColor: "rgba(0,0,0,0.4)",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    transition: "all 1.2s",
    width: "100%"
  };

  return <div style={styles} onClick={props.onClick} />;
};

export default BackDrop;
