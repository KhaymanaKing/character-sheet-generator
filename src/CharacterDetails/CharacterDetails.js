import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacterById, editCharacter } from '../services/fetch-utils';
export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const [characterForm, setCharacterForm] = useState ({
    name:'',
    level:1,
    str:10,
    dex:10,
    con:10,
    int:10,
    wis:10,
    cha:10,
  });
  const history = useHistory();

  useEffect(() => {
    async function load(){
      const character = await getCharacterById(id);
      setCharacter(character);
    }
    load();
  }, [id]);
  async function handleSubmit(e){
    e.preventDefault();
    await editCharacter(id);
    history.push('/characters');
  }
  return (
    <><div className='character-detail'>
      <h2>{character.name} level {character.level}</h2>
      <p>Strength: {character.str}</p>
      <p>Dexterity: {character.dex}</p>
      <p>Constitution: {character.con}</p>
      <p>Intelligence: {character.int}</p>
      <p>Wisdom: {character.wis}</p>
      <p>Charisma: {character.cha}</p>
    </div><form onSubmit={handleSubmit}>
      <h3>Edit Character</h3>
      <label>
          Name
        <input onChange={e => setCharacterForm({
          ...characterForm,
          name: e.target.value
        })} />
      </label>
      <label>
          Level
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          level: e.target.value
        })} />
      </label>
      <label>
          Strength
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          str: e.target.value
        })} />
      </label>
      <label>
          Dexterity
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          dex: e.target.value
        })} />
      </label>
      <label>
          Constitution
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          con: e.target.value
        })} />
      </label>
      <label>
          Intelligence
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          int: e.target.value
        })} />
      </label>
      <label>
          Wisdom
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          wis: e.target.value
        })} />
      </label>
      <label>
          Charisma
        <input type='number' onChange={e => setCharacterForm({
          ...characterForm,
          cha: e.target.value
        })} />
      </label>
      <button> Edit Character</button>
    </form></>
  );
}
