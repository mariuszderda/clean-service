import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ title, paragraph }) => (
  <div>
    <h3>{title}</h3>
    <p>{paragraph}</p>
  </div>
);

Square.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Square;
