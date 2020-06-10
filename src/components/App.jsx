
import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from './Form';
import Table from './Table';
import Modal from './Modal';

import './App.scss';

const App = ({ entries }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(() => (true));
  };

  const closeModal = () => {
    setShowModal(() => (false));
  };

  return (
    <div className="container">
      <div className="row">
        <Form />
        <Table entries={entries} />
        <Modal showModal={showModal} close={closeModal}><Form /></Modal>
      </div>
      <button onClick={openModal}>Add customer</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  entries: [],
};
