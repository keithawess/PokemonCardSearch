import React, {useState} from "react";
import {BrowserRouter as Router, Route, Navlink} from "react-router-dom"


function Login({setLoggedInUser, users}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);

    return <>
        <div>
            <label htmlFor="username">Username: </label>
            <input id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} /> 
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>
        <button type="button" onClick={()=>{
            let allegedUser = null;
            let userExists = users.filter((user) => {
                allegedUser = user;
                return user.username === username.toLowerCase()}).length === 1;
            console.log(allegedUser);
            if (userExists && allegedUser.password === password)
            {
                setIsValid(true);
                setLoggedInUser(username);
            }
            else
            {
                setIsValid(false);
            }
        }}>Log In</button>
        {!isValid && 
            <div>Username or Password is incorrect</div>
        }
    </>
}

export default Login;