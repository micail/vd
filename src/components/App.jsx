
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.scss';

const App = ({entries}) => {
  return (
    <div className="container">
      <div className="row">
      </div>
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
