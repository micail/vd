import React from 'react';

const Modal = ({showModal, close, children}) => {
  const showHide = showModal ? 'd-block' : 'd-none';
  return (
    <div className={`col-xs-12 col-sm-10 col-md-6 ${showHide}`}>
      <section className="modal-main">
        <button type="button" onClick={close}>close</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
