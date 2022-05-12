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
          <h1> Currently Logged in as {email}</h1>
          <nav>
            <Link to='/'>Characters</Link>
            <Link to="/create-character">Create A Character</Link>
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
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
