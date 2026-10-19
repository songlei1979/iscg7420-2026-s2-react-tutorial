import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BaseUrl} from "../Constraints";

function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")
    const [is_login, setIs_login] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
            setIs_login(true);
        }
    }, [token]);



    function usernameHandler(e) {
        setUsername(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)
    }

    function login() {
        let data = JSON.stringify({
            "username": username,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: BaseUrl + '/api/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                console.log(response.data);
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
         is_login ? (<div>
                    <h1>Logout</h1>
                    <button onClick={() => {
                        localStorage.removeItem("token");
                        setToken("");
                        setIs_login(false);
                        window.location.reload();
                    }}>Logout
                    </button>
                </div>): (<div>
            <h1>Login</h1>
            <p>
                Username: <input type="text" value={username}
                                 onChange={usernameHandler}/>
            </p>
            <p>
                Password: <input type="password" value={password}
                                 onChange={passwordHandler}/>
            </p>
            <button onClick={login}>Login</button>
            <p>Token: {token}</p>
        </div>)
    );
}

export default Login;