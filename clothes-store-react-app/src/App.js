import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/Register";
import { Navigation } from "./components/Navigation";
import { Login } from "./components/Login";
import { SellerDashboard } from './components/SellerDashboard';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Navigation />
          <h3>Yo, this here is App component.</h3>
        </Route>

        <Route exact path="/register">
          <Navigation />
          <Register />
        </Route>

        <Route exact path="/login">
          <Navigation />
          <Login />
        </Route>

        <Route exact path='/sellerDashboard'>
          <SellerDashboard/>
        </Route>

      </Router>
    </div>
  );
}

export default App;