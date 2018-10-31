import React from 'react';
import styled from "styled-components"

const Button = props => {
  return (
    <button disabled={props.isDisabled} className={`button`}>
      {props.text || props.children}
    </button>
  );
};

export default Button;
