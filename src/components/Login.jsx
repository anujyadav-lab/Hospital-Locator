// src/components/Login.js
import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase-config';

const Login = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        onLoginSuccess(result.user);
      })
      .catch((error) => {
        console.log('Login Failed:', error);
      });
  };

  return (
    <button onClick={handleLogin}>Login with Google</button>
  );
};

export default Login;
