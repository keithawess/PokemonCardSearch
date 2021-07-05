import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import SignUp from "./components/SignUp";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("Keith");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);

  return (
    <div className="App">
      {!loggedInUser && (
        <>
          <header>
            <Router>
              <nav>
                <NavLink activeClassName="active" to="/login">Log In</NavLink>
                <NavLink activeClassName="active" to="/signup">Sign Up</NavLink>
              </nav>
              <Switch>
                <Route path="/login">
                  <Login setLoggedInUser={setLoggedInUser} users={users} setUsers={setUsers} />
                </Route>
                <Route path="/signup">
                  <SignUp setUsers={setUsers} users={users}/>
                </Route>
                <Route path="*">
                  <Redirect to="/login"/>
                </Route>
              </Switch>

            </Router>
          </header>
        </>
      )}

      {loggedInUser && (
        <Router>
          <nav>
            <NavLink activeClassName="active" exact to="/">
              Search
            </NavLink>
            <NavLink activeClassName="active" to="/favorites">
              Favorites
            </NavLink>
          </nav>
          <Switch>
            <Route exact path="/">
              <Search search={search} setSearch={setSearch}/>
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
