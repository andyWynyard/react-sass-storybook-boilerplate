import React from 'react';

import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';

// Import your stories here

const stories = storiesOf('Project 1|Organisms', module);

stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories
  // Add your stories here by using .add
  // You wont need the call back when importing them,
  // just declare the component
  .add('Page Component', () => <p>There are none yyet :p</p>);
