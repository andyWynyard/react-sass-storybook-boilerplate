import React from 'react';

import atomic from '../../src/media/Atomic_img_001.png';

const welcome = () => {
  return (
    <div
      style={{
        position: 'relative',
        padding: '1000px;'
      }}>
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
          <h1 style={{ textAlign: 'center' }}>Welcome to the Styleguide</h1>
          <h4>
            Here, you will find all the relevant styles and components
            assosiated with the new web application for Svensk Travsport and
            Galopp.{' '}
          </h4>

          <h3>Project Structure</h3>
          <p>Atomic Design - designed by @brad_frost</p>
          <img
            style={{
              width: '100%',
              marginBottom: '1rem',
              boxShadow: '0 0 3px #ffd600'
            }}
            src={atomic}
            alt="Atomic Design"
          />
          <p>
            In the left hand menu, you will see the project divided up with this
            structure. Atomer are the smallest components possible, with
            molekyler being combinations of these and so on. Sidor will show you
            example pages for the the current project, however these are not
            exhaustive.
          </p>
        </div>
      </div>
    </div>
  );
};
export default welcome;
