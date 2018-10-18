import React from 'react';

import '../../src/sass/style.css';

const divStyle = {
  position: 'relative',
  padding: '1000px;'
};

const organisms = () => (
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
        <h1 style={{ textAlign: 'center' }}>Organisms</h1>
        <h4>
          Molecules give us some building blocks to work with, and we can now
          combine them together to form organisms. Organisms are groups of
          molecules joined together to form a relatively complex, distinct
          section of an interface.
        </h4>

        <p>
          We’re starting to get increasingly concrete. A client might not be
          terribly interested in the molecules of a design system, but with
          organisms we can see the final interface beginning to take shape. Dan
          Mall (who I’m working with on several projects) uses element collages,
          which articulate ideas for a few key organisms to facilitate client
          conversations and shape the visual direction (all without having to
          construct full comps). Organisms can consist of similar and/or
          different molecule types. For example, a masthead organism might
          consist of diverse components like a logo, primary navigation, search
          form, and list of social media channels. But a “product grid” organism
          might consist of the same molecule (possibly containing a product
          image, product title and price) repeated over and over again. Building
          up from molecules to organisms encourages creating standalone,
          portable, reusable components.
        </p>
      </div>
    </div>
  </div>
);

export default organisms;
