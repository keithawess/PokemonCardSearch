import './App.css';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {setState} from "react";

function App() {

  const [loggedInUser, setLoggedInUser] = setState(null);


  return (
    <div className="App">
      Wallpapers...



    </div>
  );
}

export default App;
