import React from 'react';
import PropTypes from 'prop-types';
import IbmLogo from './svg/ibm-logo.svg';

const Icon = ({
  type,
  size
}) => {
  switch (type) {
    case 'ibm-logo':
      return (<IbmLogo width={size} height={size} />);
    default:
      return(<Code width={size} height={size} />);
  }
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default Icon;
