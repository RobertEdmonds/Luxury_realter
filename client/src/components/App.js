import React, {useEffect, useContext, useState} from 'react';
import '../styles/App.css';
import Header from './Header';
import { Route } from "react-router-dom";
import Home from "./Home";
import Sales from './Sales';
import Footer from './Footer';
import SignUpForm from '../forms/SignUpForm';
import LogIn from '../forms/LogIn';
import NewHouseForm from '../forms/NewHouseForm';
import {UserContext} from "../context/user.js";
import {EmployeeContext} from "../context/Employee.js";


function App() {
  const {setCustomer} = useContext(UserContext)
  const {setEmployee} = useContext(EmployeeContext)
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch("/me")
    .then(resp => {
        if(resp.ok){
            resp.json().then(user => setCustomer(user))
        }
        })
  },[])

  useEffect(() => {
    fetch("/employee")
    .then(resp => {
        if(resp.ok){
            resp.json().then(user => setEmployee(user))
        }
        })
  },[])

  useEffect(() => {
    fetch('/houses')
    .then(resp => {
        if(resp.ok){
            resp.json().then(house => setHouses(house))
        }
    })

  },[])

  function handleAddHouse(newHouse){
      setHouses([...houses, newHouse])
  }
  
  return (
    
    <div>
      <Header />
      <br/>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/sales">
          <Sales  houses={houses}/>
      </Route>
      <Route exact path="/signup">
          <SignUpForm />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/new_house">
        <NewHouseForm addNewHouse={handleAddHouse}/>
      </Route>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
