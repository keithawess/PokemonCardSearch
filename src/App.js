import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch, NavLink} from "react-router-dom";
import {useState} from "react";
import Login from './components/Login';
import Search from './components/Search';
import Favorites from './components/Favorites';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);


  return (
    <div className="App">
      Wallpapers...

    {!loggedInUser && <Login setLoggedInUser={setLoggedInUser}/>}

    {loggedInUser &&
      <Router>
        <nav>
          <NavLink activeClassName="active" exact to="/">Search</NavLink>
          <NavLink activeClassName="active" to="/favorites">Favorites</NavLink>
        </nav>
        <Switch>
          <Route exact path="/"><Search /></Route>
          <Route path="/favorites"><Favorites /></Route>
          <Route path="*"><Redirect to="/"/></Route>
        </Switch>
      </Router>
    }

    </div>
  );
}

export default App;
