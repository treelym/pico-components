import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classNames';

const Button = ({
  children,
  classes,
  contrast,
  outline,
  secondary,
  type = 'button'
}) => {
  const classList = classNames(classes, {
    'contrast': contrast,
    'outline': outline,
    'secondary': secondary
  });

  return (
    <button
      className={classList}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  contrast: PropTypes.bool,
  outline: PropTypes.bool,
  secondary: PropTypes.bool
};

export default Button;
