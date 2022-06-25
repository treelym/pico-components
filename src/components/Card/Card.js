import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  headerContent,
  footerContent
}) => {
  return (
    <article>
      {headerContent && <header>{headerContent}</header>}
      {children}
      {footerContent && <footer>{footerContent}</footer>}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  headerConent: PropTypes.node,
  footerContent: PropTypes.node
};

export default Card;