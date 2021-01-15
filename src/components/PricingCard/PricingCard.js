import React from 'react';
import PropTypes from 'prop-types';

const PricingCard = ({ title }) => <div>{title}</div>;

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PricingCard;
