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
    <div className='auth-page'>
      <form onSubmit={handleSignUp}>
        <label>
                Enter Email
          <input required type='email' onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label>
                Create password
          <input required type='password' onChange={e => setFormPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
                Enter Email
          <input required type='email' onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label>
                Enter Password
          <input required type='password' onChange={e => setFormPassword(e.target.value)}/>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
