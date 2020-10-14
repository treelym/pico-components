import React from 'react';
import PropTypes from 'prop-types';

import { colorModifiers } from '../../utils/modifiers';
import classNames from '../../utils/classNames';

const Button = ({
  children,
  color
}) => {
  const classes = classNames(
    'button', {
    [`is-${color}`]: color
  });

  return (
    <button>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  color: PropTypes.oneOf(colorModifiers)
};

export default Button;
