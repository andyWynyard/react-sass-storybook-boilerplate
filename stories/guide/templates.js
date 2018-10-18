import React from 'react';

import '../../src/sass/style.css';

const divStyle = {
  position: 'relative',
  padding: '1000px;'
};

const templates = () => (
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
        <h1 style={{ textAlign: 'center' }}>Templates</h1>
        <h4>
          At the template stage, we break our chemistry analogy to get into
          language that makes more sense to our clients and our final output.
          Templates consist mostly of groups of organisms stitched together to
          form pages. It’s here where we start to see the design coming together
          and start seeing things like layout in action.
        </h4>

        <p>
          Templates are very concrete and provide context to all these
          relatively abstract molecules and organisms. Templates are also where
          clients start seeing the final design in place. In my experience
          working with this methodology, templates begin their life as HTML
          wireframes, but over time increase fidelity to ultimately become the
          final deliverable. Bearded Studio in Pittsburgh follow a similar
          process, where designs start grayscale and layout-less but slowly
          increase fidelity until the final design is in place.
        </p>
      </div>
    </div>
  </div>
);

export default templates;
