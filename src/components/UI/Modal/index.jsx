import React from "react";

import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onBackDropClick, children }) => {
  return (
    <>
      {createPortal(<Backdrop onClick={onBackDropClick} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
