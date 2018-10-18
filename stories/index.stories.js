import '../src/sass/style.css';
import { storiesOf } from '@storybook/react';

import atoms from './guide/atoms';
import molecules from './guide/molecules';
import welcome from './guide/welcome';
import organisms from './guide/organisms';
import templates from './guide/templates';
import pages from './guide/pages';

const stories = storiesOf('Guide', module);

stories
  .add('Big ass welcome to everyone', welcome)
  .add('Atoms', atoms)
  .add('Molecules', molecules)
  .add('Organisms', organisms)
  .add('Templates', templates)
  .add('Pages', pages);
