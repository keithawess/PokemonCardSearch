import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

function SignUp({ users, setUsers }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState(null);
  const history = useHistory();

  //Checks if email has minimum required parts. Does not fully check if email is valid.
  function checkEmail() {
    if (
      emailAdd.includes("@") &&
      emailAdd.includes(".") &&
      emailAdd.length > 5
    ) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (emailAdd.length > 0) {
      setIsValid(checkEmail());
    }
  }, [emailAdd]);

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
          {users.filter((user) => user.username === username.toLowerCase())
            .length > 0 && <span>Username already exists. </span>}
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
          {password.length > 0 && password.length < 6 && (
            <span>Please enter at least 6 characters.</span>
          )}
        </div>
        <div className="full flex logInput">
          <label className="textWhite textCenter half" htmlFor="repassword">Enter Password Again: </label>
          <input
          className="half"
            type="password"
            id="repassword"
            value={rePassword}
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
          />
          {rePassword.length > 0 && password !== rePassword && (
            <span>Passwords do not match.</span>
          )}
        </div>
        <div className="full flex logInput">
          <label className="half textCenter textWhite" htmlFor="email">Email Address: </label>
          <input
          className="half"
            id="email"
            value={emailAdd}
            onChange={(e) => {
              setEmailAdd(e.target.value);
            }}
          />
          {!isValid && <span>Not a valid email.</span>}
        </div>
        <button
          className="logButton"
          type="button"
          onClick={() => {
            if (
              users.filter((user) => user.username === username.toLowerCase())
                .length === 0 &&
              password === rePassword &&
              password.length >= 6 &&
              checkEmail()
            ) {
              setUsers((curr) => [
                ...curr,
                {
                  username: username.toLowerCase(),
                  password: password,
                  email: emailAdd,
                  favoriteList: [],
                },
              ]);
              setMessage("Successfully Signed Up!");
              history.push("/login");
            } else {
              setMessage("Please resolve errors");
            }
          }}
        >
          Submit
        </button>
        {message && <div>{message}</div>}
      </div>
    </>
  );
}

export default SignUp;
