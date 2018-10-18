import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Button from '../Button';

test('Button', () => {
  expect(ReactDOMServer.renderToStaticMarkup(<Button />)).toMatchSnapshot();
});
