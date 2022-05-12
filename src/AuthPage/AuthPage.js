import React from 'react';
import { useState } from 'react';
import { signUp } from '../services/fetch-utils';
import { getUser, signIn, signOut } from './services/fetch-utils.js';

export default function AuthPage({ setEmail, setToken }) {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');

  async function handleSignUp(e){
    e.preventDefault();
    await signUp(formEmail, formPassword);
    const {
      access_token,
      user: { email }
    } = getUser();
    setEmail(email);
    setToken(access_token); 
  }

  async function handleSignIn(e){
    e.preventDefault();
    await signIn(formEmail, formPassword);
    const {
      access_token,
      user: { email }
    } = getUser();
    setEmail(email);
    setToken(access_token); 
  }
  return (
    <div>AuthPage</div>
  );
}
