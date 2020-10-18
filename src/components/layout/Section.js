import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';


const Section = ({
  classes = {},
  size
}) => {
  const baseClass = 'section';
  const classList = classNames(baseClass, {
    [`is-${size}`]: size,
    ...classes
  })

  return (
    <section className={classList}>
      {children}
    </section>
  );
};

Section.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.children.isRequired,
  size: PropTypes.oneOf(['medium', 'large'])
};

export default Section;
