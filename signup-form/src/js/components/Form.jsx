import React from 'react';

import Fieldset from './Fieldset';

import fieldsetData from '../data/fieldsetData';

export default function Form() {
  const fieldsetElements = fieldsetData.map(fieldset => {
    return <Fieldset
      name={fieldset.name}
      label={fieldset.label}
      type={fieldset.type}
    />
  });

  return (
    <form action='#'>
      {fieldsetElements}

      <button type="submit">Create Account</button>
    </form>
  );
}