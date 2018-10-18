import React from 'react';

const Button = props => {
  return (
    <button disabled={props.isDisabled} className={`button`}>
      {props.text || props.children}
    </button>
  );
};

export default Button;
