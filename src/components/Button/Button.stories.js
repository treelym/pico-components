import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import Button from './Button';

export default {
  title: 'Button'
};

export const defaultButton = () => (
  <Button
    contrast={boolean('Contrast', false)}
    outline={boolean('Outline', false)}
    secondary={boolean('Secondary', false)}
  >
    Button Component
  </Button>
);
