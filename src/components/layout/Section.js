import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';


const Section = ({
  classes = [],
  children,
  size
}) => {
  const baseClass = 'section';
  const classList = classNames(
    baseClass,
    {
      [`is-${size}`]: size
    },
    classes
  );

  return (
    <section className={classList}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.children.isRequired,
  classes: PropTypes.array,
  size: PropTypes.oneOf(['medium', 'large'])
};

export default Section;
