import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';

import button from './atoms/button';

const stories = storiesOf('Project 1|Atoms', module);

stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories.add('Button', button);
