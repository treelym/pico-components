import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({
  children,
  isOpen,
  summary
}) => (
  <details open={isOpen}>
    <summary>{summary}</summary>
    {children}
  </details>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  summary: PropTypes.string.isRequired
};

export default Accordion;
