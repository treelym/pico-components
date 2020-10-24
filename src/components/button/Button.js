import React from 'react';
import PropTypes from 'prop-types';

import { colorModifiers } from '../../utils/modifiers';
import classNames from '../../utils/classNames';

const Button = ({
  children,
  color
}) => {
  const baseClass = 'button';
  const classes = classNames(baseClass, {
    [`is-${color}`]: color
  });

  return (
    <button>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(colorModifiers)
};

export default Button;
