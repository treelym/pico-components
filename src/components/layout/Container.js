import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';
import { containerSizeModifiers } from '../../utils/modifiers';


const Container = ({
  classes = [],
  size 
}) => {
  const baseClass = 'container';
  const classList = classNames(
    baseClass,
    {
      [`is-${size}`]: size
    },
    classes
  );

  return (
    <div className={classList}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.children.isRequired,
  classes: PropTypes.array,
  size: PropTypes(containerSizeModifiers)
};

export default Container;