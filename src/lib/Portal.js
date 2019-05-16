import React from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

const Portal = props => {
  const { children } = props;
  const el = document.createElement("div");

  React.useEffect(() => {
    portalRoot.appendChild(el);

    return () => {
      portalRoot.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
