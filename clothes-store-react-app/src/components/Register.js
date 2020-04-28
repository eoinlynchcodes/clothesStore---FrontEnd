import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


export default function Register(){

    const handleSubmit = (event) => {
        event.preventDefault();
        debugger
        console.log(registerObject);
            axios.post('http://localhost:5000/api/authentication/register', registerObject)
            .then(res => {
                setRegisterObject(res.data);
                history.push('/login');
            })  
            .catch(error => {
                console.log(error);
            })  
    }
    
    const [ registerObject, setRegisterObject ] = useState({
        firstName: '',
        lastName: '',
        username: '',
        emailAddress: '',
        password: '',
        dateOfBirth: ''
    });
    
    const history = useHistory();
    
    const handleChange = (event) => {
            setRegisterObject({
            ...registerObject,
            [event.target.name]: event.target.value });
    };

    return (
        <div>
            {/* Scope for using Material UI & Formki here */}
            <form onSubmit={event => handleSubmit(event)}>
                <h1>Register Here:</h1>
                <label>First Name:</label>
                <input 
                placeholder="First Name"
                type="text"
                name="firstName"
                value={registerObject.firstName}
                onChange={handleChange}
                />
                <br/>
                <label>Last Name:</label>
                <input 
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={registerObject.lastName}
                onChange={handleChange}
                />
                <br/>
                <label>Username:</label>
                <input
                placeholder="Username:"
                type="text"
                name="username"
                value={registerObject.username}
                onChange={handleChange}
                />
                <br/>
                <label>Email Address:</label>
                <input 
                placeholder="Email Address"
                type="text"
                name="emailAddress"
                value={registerObject.emailAddress}
                onChange={handleChange}
                />
                <br/>
                <label>Password:</label>
                <input 
                placeholder="Password"
                type="text"
                name="password"
                value={registerObject.password}
                onChange={handleChange}
                />
                <br/>
                <label>Date of Birth</label>
                <input 
                type="date"
                name="dateOfBirth"
                value={registerObject.dateOfBirth}
                onChange={handleChange}
                />
                <br/>
                <button>Register</button>
            </form>
        </div>
    )
}