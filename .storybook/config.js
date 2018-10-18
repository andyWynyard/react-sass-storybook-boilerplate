import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Test thing brother',

  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  goFullScreen: false
});

// automatically import all files ending in *.stories.js

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(() => {
  loadStories();
}, module);
