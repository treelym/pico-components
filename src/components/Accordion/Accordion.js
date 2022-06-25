import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({
  children,
  summary
}) => (
  <details>
    <summary>{summary}</summary>
    {children}
  </details>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  summary: PropTypes.string.isRequired
};

export default Accordion;
