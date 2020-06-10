import React from 'react';

import './Modal.scss';

const Modal = ({showModal, close, children}) => {
  const showHide = showModal ? 'd-block' : 'd-none';
  return (
    <div className={`col-xs-12 col-sm-8 col-md-4 vd-modal ${showHide}`}>
      <section className="modal-main">
        <button type="button" className="close-button float-right" onClick={close}><i>x</i></button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
