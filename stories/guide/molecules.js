import React from 'react';

import '../../src/sass/style.css';

const divStyle = {
  position: 'relative',
  padding: '1000px;'
};

const molecule = () => (
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
        <h1 style={{ textAlign: 'center' }}>Molecules</h1>
        <h4>
          Things start getting more interesting and tangible when we start
          combining atoms together. Molecules are groups of atoms bonded
          together and are the smallest fundamental units of a compound. These
          molecules take on their own properties and serve as the backbone of
          our design systems. For example, a form label, input or button aren’t
          too useful by themselves, but combine them together as a form and now
          they can actually do something together.
        </h4>

        <p>
          Building up to molecules from atoms encourages a “do one thing and do
          it well” mentality. While molecules can be complex, as a rule of thumb
          they are relatively simple combinations of atoms built for reuse.
        </p>
      </div>
    </div>
  </div>
);

export default molecule;
