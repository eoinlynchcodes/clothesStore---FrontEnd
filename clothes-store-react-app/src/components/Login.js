import React from 'react';

export const Login = () => {

    return (
        <div>
            <form>
            <h3>Login and Start Selling</h3>
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
                <button>Login</button>
            </form>
        </div>
    )
}