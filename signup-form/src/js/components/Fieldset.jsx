import React from 'react';

export default function Fieldset(props) {
  return (
    <fieldset>
      <label htmlFor={props.name}>{props.label}</label>

      <input
        type={props.type}
        name={props.name}
        id={props.name}
        pattern={props.pattern}
      />
    </fieldset>
  );
}