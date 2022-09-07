import React, {useEffect, useContext} from 'react';
import '../styles/App.css';
import Header from './Header';
import { Route } from "react-router-dom";
import Home from "./Home";
import Sales from './Sales';
import Footer from './Footer';
import SignUpForm from './SignUpForm';
import {UserContext} from "../context/user.js";


function App() {
  const {setCustomer} = useContext(UserContext)
  useEffect(() => {
    fetch("/me").then(resp => {
        if(resp.ok){
            resp.json().then(user => setCustomer(user))
        }
    })
  })
  
  return (
    
    <div>
      <Header />
      <br/>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/sales">
          <Sales />
      </Route>
      <Route exact path="/signup">
          <SignUpForm />
      </Route>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
