import React from 'react';

const Modal = ({showModal, close, children}) => {
  const showHide = showModal ? 'd-block' : 'd-none';
  return (
    <div className={showHide}>
      <section className="modal-main">
        <button type="button" onClick={close}>close</button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
