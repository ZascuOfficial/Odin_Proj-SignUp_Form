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
      <h3>Sign Up</h3>

      <div className="fieldset-container">
        {fieldsetElements}
      </div>

      <button type="submit" className='submit-btn'>Create Account</button>
    </form>
  );
}