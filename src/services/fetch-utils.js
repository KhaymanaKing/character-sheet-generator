import { client, checkError } from './client';

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email,
    password
  });
  if (error) return error;
  return user;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({
    email,
    password
  });
  if (error) return error;
  return user;
}

export async function createCharacter(character) {
  const { body, error } = await client
    .from ('character_gen')
    .insert (character);
  return error || body;
}

