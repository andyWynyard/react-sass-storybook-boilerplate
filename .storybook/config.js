import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Test thing brother',
  // theme: {
  //   ...themes.normal,
  //   mainBorderRadius: 0
  // },
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  goFullScreen: false
});

// automatically import all files ending in *.stories.js

// , setAddon, addDecorator

const req = require.context('../stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(() => {
  loadStories();
}, module);

// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

// configure(loadStories, module);
