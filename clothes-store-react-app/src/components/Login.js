import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export const Login = () => {

    const [ loginCredentials, setLoginCredentials ] = useState({
        emailAddress: '',
        password: ''
    });

    const handleChange = (event) => {
        setLoginCredentials({
            ...loginCredentials,
            [event.target.name]: event.target.value
        });
    }
    
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(loginCredentials);
        axios.post('http://localhost:7000/api/authentication/login', loginCredentials)
        .then(response => {
            setLoginCredentials(response.data);
            history.push('/sellerDashboard');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div>
            <form onSubmit={event => handleSubmit(event)}>
            <h3>Login and Start Selling</h3>
            <label>Email Address:</label>
                <input 
                placeholder="Email Address"
                type="text"
                name="emailAddress"
                value={loginCredentials.emailAddress}
                onChange={event => handleChange(event)}
                />
                <br/>

                <label>Password:</label>
                <input 
                placeholder="Password"
                type="text"
                name="password"
                value={loginCredentials.password}
                onChange={event => handleChange(event)}
                />
                <button>Login</button>
            </form>
        </div>
    )
}