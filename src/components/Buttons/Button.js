import React from 'react';
import PropTypes from 'prop-types';

import { buttonColorModifiers } from '../../utils/modifiers';
import classNames from '../../utils/classNames';

const Button = ({
  buttonState,
  color,
  disabled,
  fullwidth,
  inverted,
  isStatic,
  light,
  loading,
  outlined,
  rounded,
  size,
  text,
  type = 'button'
}) => {
  const classes = classNames('button', {
    [`is-${buttonState}`]: buttonState,
    [`is-${color}`]: color,
    [`is-${fullwidth}`]: fullwidth,
    [`is-${inverted}`]: inverted,
    [`is-${isStatic}`]: isStatic,
    [`is-${light}`]: light,
    [`is-${loading}`]: loading,
    [`is-${outlined}`]: outlined,
    [`is-${rounded}`]: rounded,
    [`is-${size}`]: size,
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
  buttonState: PropTypes.oneOf(['active', 'focused', 'hovered']),
  color: PropTypes.oneOf(buttonColorModifiers),
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  inverted: PropTypes.bool,
  isStatic: PropTypes.bool,
  light: PropTypes.bool,
  loading: PropTypes.bool,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit'])
};

export default Button;
