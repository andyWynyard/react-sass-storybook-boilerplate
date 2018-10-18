import React from 'react';

import '../../src/sass/style.css';

const divStyle = {
  position: 'relative',
  padding: '1000px;'
};

const pages = () => (
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
        <h1 style={{ textAlign: 'center' }}>Pages</h1>
        <h4>
          Pages are specific instances of templates. Here, placeholder content
          is replaced with real representative content to give an accurate
          depiction of what a user will ultimately see.
        </h4>

        <p>
          Pages are the highest level of fidelity and because they’re the most
          tangible, it’s typically where most people in the process spend most
          of their time and what most reviews revolve around. The page stage is
          essential as it’s where we test the effectiveness of the design
          system. Viewing everything in context allows us to loop back to modify
          our molecules, organisms, and templates to better address the real
          context of the design. Pages are also the place to test variations in
          templates. For example, you might want to articulate what a headline
          containing 40 characters looks like, but also demonstrate what 340
          characters looks like. What does it look like when a user has one item
          in their shopping cart versus 10 items with a discount code applied?
          Again, these specific instances influence how we loop back through and
          construct our system.
        </p>
      </div>
    </div>
  </div>
);

export default pages;
