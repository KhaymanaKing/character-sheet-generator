import React from 'react';
import { useState } from 'react';
import { createCharacter } from '../services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreateCharacter() {
  const history = useHistory();
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
  async function handleSubmit(e){
    e.preventDefault();
    await createCharacter(characterForm);
    history.push('/characters');
  }
    
  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h3>Create Character!</h3>
        <label>
                Name
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            name: e.target.value
          })}/>
        </label>
        <label>
                Level
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            level: e.target.value
          })}/>
        </label>
        <label>
                Strength
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            str: e.target.value
          })}/>
        </label>
        <label>
                Dexterity
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            dex: e.target.value
          })}/>
        </label>
        <label>
                Constitution
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            con: e.target.value
          })}/>
        </label>
        <label>
                Intelligence
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            int: e.target.value
          })}/>
        </label>
        <label>
                Wisdom
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            wis: e.target.value
          })}/>
        </label>
        <label>
                Charisma
          <input required onChange={e => setCharacterForm ({
            ...characterForm,
            cha: e.target.value
          })}/>
        </label>
        <button> Generate Character</button>
      </form>
    </div>
  );
}
