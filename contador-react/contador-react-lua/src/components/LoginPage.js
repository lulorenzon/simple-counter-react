// LoginPage.js
import React from 'react';

function LoginPage({ login }) {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage;
