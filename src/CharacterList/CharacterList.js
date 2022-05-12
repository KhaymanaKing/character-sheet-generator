import React from 'react';
import { useState, useEffect } from 'react';
import { getCharacters } from '../services/fetch-utils';
import Character from './Character';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function loadCharacters(){
      const characterData = await getCharacters();
      setCharacters(characterData);
    }
    loadCharacters();
  }, []);

  return (
    <div className='character-list'>
      {
        characters.map((character) => 
          <Character key={character.name} 
            character={character}/>)
      }
    </div>
  );
}
