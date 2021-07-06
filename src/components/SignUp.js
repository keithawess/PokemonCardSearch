import React, { useState, useEffect, useCallback } from "react";
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
  const checkEmail = useCallback(() => {
    if (
      emailAdd.includes("@") &&
      emailAdd.includes(".") &&
      emailAdd.length > 5
    ) {
      return true;
    } else {
      return false;
    }
  }, [emailAdd]);

  useEffect(() => {
    if (emailAdd.length > 0) {
      setIsValid(checkEmail());
    }
  }, [emailAdd, checkEmail]);

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
        <div className="full flex logInput">
          <label className="textWhite textCenter half" htmlFor="repassword">
            Enter Password Again:{" "}
          </label>
          <input
            className="half"
            type="password"
            id="repassword"
            value={rePassword}
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
          />
        </div>
        <div className="full flex logInput">
          <label className="half textCenter textWhite" htmlFor="email">
            Email Address:{" "}
          </label>
          <input
            className="half"
            id="email"
            value={emailAdd}
            onChange={(e) => {
              setEmailAdd(e.target.value);
            }}
          />
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
        {users.filter((user) => user.username === username.toLowerCase())
          .length > 0 && <div>Username already exists. </div>}
        {password.length > 0 && password.length < 6 && (
          <div className="textCenter textWhite">
            Password must be at least 6 characters.
          </div>
        )}
        {rePassword.length > 0 && password !== rePassword && (
          <div className="textCenter textWhite">Passwords do not match.</div>
        )}
        {!isValid && emailAdd.length > 0 && (
          <div className="textCenter textWhite">Not a valid email.</div>
        )}
        {message && <div className="textCenter textWhite">{message}</div>}
      </div>
    </>
  );
}

export default SignUp;
