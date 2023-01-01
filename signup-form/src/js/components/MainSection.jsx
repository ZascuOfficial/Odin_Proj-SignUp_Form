import React from 'react';

import Form from './Form';

export default function MainSection() {
  return (
    <div className="main-section">
      <h2>Welcome</h2>

      <p>
        Begin by filling in the necessary information int he form bellow and then click the button after it to create an official account for this community.
      </p>

      <Form />

      <p className="login">
        Already own an account?
        <a href="#">Log in</a>
      </p>
    </div>
  );
}