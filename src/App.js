import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import AuthPage from './AuthPage/AuthPage';
import CharacterDetails from './CharacterDetails/CharacterDetails';
import CharacterList from './CharacterList/CharacterList';
import CreateCharacter from './CreateCharacter/CreateCharacter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
