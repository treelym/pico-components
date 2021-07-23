import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import Button from './Button';
import { buttonModifiers } from '../../utils/modifiers';

export default {
  title: 'Button'
};

export const defaultButton = () => {
  return (
    <Button
      buttonState={
        select('Button State', ['', ...buttonModifiers.buttonStates], '')
      }
      color={
        select('Color', ['', ...buttonModifiers.colors], '')
      }
      isDisabled={boolean('Disabled', false)}
      isFullwidth={boolean('Fullwidth', false)}
      isInverted={boolean('Inverted', false)}
      isLight={boolean('Light', false)}
      isLoading={boolean('Loading', false)}
      isOutlined={boolean('Outlined', false)}
      isRounded={boolean('Rounded', false)}
      isStatic={boolean('Static', false)}
      size={
        select('Size', ['', ...buttonModifiers.sizes], '')
      }
      text={text("Text", "Hello, world!")}
    />
  );
};
