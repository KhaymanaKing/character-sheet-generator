import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacterById } from '../services/fetch-utils';

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function load(){
      const character = await getCharacterById(id);
      setCharacter(character);
    }
    load();
  }, [id]);
  return (
    <div className='character-detail'>
      <h2>{character.name} level {character.level}</h2>
      <p>Strength: {character.str}</p>
      <p>Dexterity: {character.dex}</p>
      <p>Constitution: {character.con}</p>
      <p>Intelligence: {character.int}</p>
      <p>Wisdom: {character.wis}</p>
      <p>Charisma: {character.cha}</p>
    </div>
  );
}
