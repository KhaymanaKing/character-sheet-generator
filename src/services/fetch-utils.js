import { client, checkError } from './client';

export async function signUp(email, password) {
  const response = await client.auth.signUp({
    email,
    password
  });
  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({
    email,
    password
  });
  return response.user;
}
export async function logout(){
  await client.auth.signOut();
  return window.location.href = '../';
}

export async function createCharacter(character) {
  const { body, error } = await client
    .from ('character_gen')
    .insert (character);
  return error || body;
}

export async function getCharacters() {
  const response = await client
    .from('character_gen')
    .select();

  return checkError(response);
}

export async function getCharacterById(id) {
  const response = await client
    .from ('character_gen')
    .select()
    .match ({ id })
    .single();
  return checkError(response);
}

export async function editCharacter(id, character) {
  const { body, error } = await client
    .from ('character_gen')
    .update (character)
    .match ({ id });
  return error || body;
}
export function getUser(){
  return client.auth.session();
}
