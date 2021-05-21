import React from "react";
import './App.css';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Ipc4yC0KHjr56dwFkxkzarroUQbnVQWqhCIYPwthrs7jrYwQrOSQIipYxcDot1GjTnXYxiDzkD2jXo6l52tcG2B00B0FgKfu6");

function App() {

  const [ {}, dispatch] = useStateValue();

   useEffect(() => {
      //will only run once when the app component loads...

      auth.onAuthStateChanged(authUser =>{
        console.log('THE USER IS:', authUser);

        if(authUser) {
          // the user just logged in/ were logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else{
          // the user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })

        }
      })
   }, [])

  return (
    // BEM naming convention
    <Router>
    <div className="app">  
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout"> 
              <Header />
              <Checkout />
          </Route>
          <Route path="/payment"> 
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements> 
          </Route> 
          <Route path="/orders"> 
              <Header />
              <Orders />
          </Route>
          <Route path="/"> 
              <Header />
              <Home />
          </Route> 
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
