import React from 'react';
import { Link } from 'react-router-dom';

export default function Character({ character }) {
  return (
    <Link to={`/characters/${character.id}`}>
      <div className='character'>
        <h2>{character.name}</h2>
        <p>Character Level:{character.level}</p>
      </div>
    </Link>
  );
}
