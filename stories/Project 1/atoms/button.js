import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs/react';

import Button from '../../../src/components/atoms/Button';
import { withNotes } from '@storybook/addon-notes';

import notes from './button.md';

const button = withNotes(notes)(() => {
  const options = {
    primary: 'Primary',
    secondary: 'Secondary',
    'secondary-dark': 'Secondary dark',
    tertiary: 'Tertiary'
  };
  const defaultValue = 'primary';

  const typ = select('Types', options, defaultValue);

  const content = text('Text', 'Hi there');

  return (
    <div style={{ padding: '20px' }} className="container-fluid">
      <Button type={typ}>{content}</Button>
    </div>
  );
});

export default button;
