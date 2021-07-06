import React, { useState } from "react";

function Login({ setLoggedInUser, users }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  return (
    <>
      <div className="loginContainer border marginCenter flexCol">
        <div className="full flex logInput">
          <label className="half textCenter textWhite" htmlFor="username">
            Username:{" "}
          </label>
          <input
            className="half"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="full flex logInput">
          <label className="half textCenter textWhite" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="half"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          className="logButton marginCenter"
          type="button"
          onClick={() => {
            let allegedUser = null;
            let userExists =
              users.filter((user) => {
                allegedUser = user;
                return user.username === username.toLowerCase();
              }).length === 1;
            console.log(allegedUser);
            if (userExists && allegedUser.password === password) {
              setIsValid(true);
              setLoggedInUser(username);
            } else {
              setIsValid(false);
            }
          }}
        >
          Log In
        </button>
        {!isValid && (
          <div className="textCenter textWhite">
            Username or Password is incorrect
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
