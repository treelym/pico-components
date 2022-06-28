import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({
  children,
  isButton,
  isOpen,
  summary
}) => {
  const props = {
    ...(isButton && { role: 'button' })
  };
  return (
    <details open={isOpen}>
      <summary {...props}>{summary}</summary>
      {children}
    </details>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  isButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  summary: PropTypes.string.isRequired
};

export default Accordion;
