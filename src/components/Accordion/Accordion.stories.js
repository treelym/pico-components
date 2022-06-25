import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Accordion'
};

export const defaultAccordion = () => (
  <>
    <Accordion summary="Accordion #1">
      <p>And here's more!</p>
    </Accordion>
    <Accordion summary="Accordion #2">
      <ul>
        <li>With</li>
        <li>a</li>
        <li>list</li>
        <li>inside</li>
      </ul>
    </Accordion>
  </>
);

