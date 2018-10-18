import React from 'react';

import '../../src/sass/style.css';

const divStyle = {
  position: 'relative',
  padding: '1000px;'
};

const atoms = () => (
  <div style={divStyle}>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '-1',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    />
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div
        style={{
          padding: '50px 20px',
          width: '100%',
          backgroundColor: 'rgba(238,238,238,0.85)',
          boxShadow: '0 0 5px white'
        }}>
        <h1 style={{ textAlign: 'center' }}>Atoms</h1>
        <h4>
          Atoms are the basic building blocks of matter. Applied to web
          interfaces, atoms are our HTML tags, such as a form label, an input or
          a button.
        </h4>

        <p>
          Atoms can also include more abstract elements like color palettes,
          fonts and even more invisible aspects of an interface like animations.
          Like atoms in nature they’re fairly abstract and often not terribly
          useful on their own. However, they’re good as a reference in the
          context of a pattern library as you can see all your global styles
          laid out at a glance.
        </p>
      </div>
    </div>
  </div>
);

export default atoms;
