import React from 'react';

import Form from './Form';
import Footer from './Footer';

export default function MainSection() {
  return (
    <main className="main-section">
      <div className="introduction">
        <h2>Welcome</h2>

        <p>
          Begin by filling in the necessary information in the form bellow and then click the button after it to create an official account for this community.
        </p>
      </div>

      <Form />
      <Footer />
    </main>
  );
}