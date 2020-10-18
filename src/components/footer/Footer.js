import React from 'react';
import PropTypes from 'prop-types';

import classNames from '../../utils/classNames';


const Footer = ({
  children,
  classes = []
}) => {
  const baseClass = 'footer';
  const classList = classNames(
    baseClass,
    classes
  );

  return (
    <footer className={classList}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.array
};

export default Footer;
