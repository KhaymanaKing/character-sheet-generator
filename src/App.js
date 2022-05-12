import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import CharacterDetails from './CharacterDetails/CharacterDetails';
import CharacterList from './CharacterList/CharacterList';
import CreateCharacter from './CreateCharacter/CreateCharacter';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() =>{
    const user = getUser();
    if (user) {
      setToken(user.access_token);
      setEmail(user.user.email);
    }
  }, []);

  async function handleLogout(){
    await logout();
    setEmail('');
    setToken('');
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2> Currently Logged in as {email}</h2>
          <nav>
            <ul>
              <li>
                <Link to='/'>Characters</Link>
              </li>
              <li>
                <Link to="/create-character">Create A Character</Link>
              </li>
            </ul>
          </nav>
          <button onClick={handleLogout}>Log Out</button>
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                token
                  ? <Redirect to='/characters'/>
                  : <AuthPage setEmail={setEmail} setToken={setToken}/>
              }
            </Route>
            <Route exact path='/characters'>
              {
                token
                  ? <CharacterList/>
                  : <Redirect to='/'/>
              }
            </Route>
            <Route exact path='/characters/:id'>
              {
                token
                  ? <CharacterDetails/>
                  : <Redirect to='/'/>
              }
            </Route>
            <Route exact path='/create-character'>
              {
                token
                  ? <CreateCharacter/>
                  : <Redirect to='/'/>
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
