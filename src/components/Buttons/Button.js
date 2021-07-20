import React from 'react';
import PropTypes from 'prop-types';

import { buttonColorModifiers } from '../../utils/modifiers';
import classNames from '../../utils/classNames';

const Button = ({
  color,
  disabled,
  fullwidth,
  inverted,
  light,
  loading,
  outlined,
  rounded,
  size,
  state,
  static,
  text,
  type = 'button'
}) => {
  const classes = classNames('button', {
    [`is-${color}`]: color,
    [`is-${fullwidth}`]: fullwidth,
    [`is-${inverted}`]: inverted,
    [`is-${light}`]: light,
    [`is-${loading}`]: loading,
    [`is-${outlined}`]: outlined,
    [`is-${rounded}`]: rounded,
    [`is-${size}`]: size,
    [`is-${state}`]: state,
    [`is-${static}`]: static
  });

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(buttonColorModifiers),
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  inverted: PropTypes.bool,
  light: PropTypes.bool,
  loading: PropTypes.bool,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  state: PropTypes.oneOf(['active', 'focused', 'hovered']),
  static: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
