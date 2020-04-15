import React from 'react';
import { Route } from 'react-router-dom';
import { Register } from './components/Register';
import { Navigation } from './components/Navigation';
import { Login } from './components/Login';

function App() {
  return (
    <div>
        <Route exact path='/'>
          <Navigation/>
        </Route>

        <Route exact path='/register'>
          <Navigation/>
          <Register/>
        </Route>

        <Route exact path='/login'>
          <Navigation/>
          <Login/>
        </Route>
    </div>
  );
}

export default App;
