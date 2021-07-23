import React from 'react';
import PropTypes from 'prop-types';

import { buttonModifiers } from '../../utils/modifiers';
import classNames from '../../utils/classNames';

const Button = ({
  buttonState,
  classes,
  color,
  isDisabled,
  isFullwidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  isStatic,
  size,
  text,
  type = 'button'
}) => {
  const classList = classNames('button', classes, {
    [`is-${buttonState}`]: buttonState,
    [`is-${color}`]: color,
    'is-fullwidth': isFullwidth,
    'is-inverted': isInverted,
    'is-light': isLight,
    'is-loading': isLoading,
    'is-outlined': isOutlined,
    'is-rounded': isRounded,
    'is-static': isStatic,
    [`is-${size}`]: size
  });

  return (
    <button
      className={classList}
      disabled={isDisabled}
      type={type}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  buttonState: PropTypes.oneOf(buttonModifiers.buttonStates),
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  color: PropTypes.oneOf(buttonModifiers.colors),
  isDisabled: PropTypes.bool,
  isFullwidth: PropTypes.bool,
  isInverted: PropTypes.bool,
  isLight: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isRounded: PropTypes.bool,
  isStatic: PropTypes.bool,
  size: PropTypes.oneOf(buttonModifiers.sizes),
  text: PropTypes.string,
  type: PropTypes.oneOf(buttonModifiers.types)
};

export default Button;
