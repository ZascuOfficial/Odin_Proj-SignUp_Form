import React from 'react';

import Form from './Form';

export default function MainSection() {
  return (
    <main className="main-section">
      <div className="introduction">
        <h2>Welcome</h2>

        <p>
          Begin by filling in the necessary information in the form bellow and then click the button after it to create an official account for this community.
        </p>
      </div>

      <h3>Sign Up</h3>

      <Form />

      <p className="login">
        Already own an account?
        <a href="#">Log in</a>
      </p>
    </main>
  );
}