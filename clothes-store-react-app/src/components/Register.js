import React from 'react';
import { useHistory } from 'react-router-dom';

export const Register = () => {

    const history = useHistory();

    const submitForm = () => {
        history.push('/login');
    }

    return (
        <div>
            {/* Scope for using Material UI & Formki here */}
            <form onSubmit={event => submitForm(event)}>
                <h1>Sell Your Clothes - Make €€€</h1>
                <label>First Name:</label>
                <input 
                placeholder="First Name"
                type="text"
                />
                <br/>
                <label>Last Name:</label>
                <input 
                placeholder="Last Name"
                type="text"
                />
                <br/>
                <label>Email Address:</label>
                <input 
                placeholder="Email Address"
                type="text"
                />
                <br/>

                <label>Password:</label>
                <input 
                placeholder="Password"
                type="text"
                />
                <br/>
                <label>Date of Birth</label>
                <input 
                type="date"
                />
                <br/>
                <button>Register</button>
            </form>
        </div>
    )
}