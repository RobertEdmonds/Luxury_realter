import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import {UserContext} from "../context/user.js"
import {EmployeeContext} from '../context/Employee.js'


function NavBar(){
    const {customer, handleLogout} = useContext(UserContext)
    const {employee} = useContext(EmployeeContext)

    if(!customer && !employee){
        return(
            <div style={{top: "3rem"}} className="NavBar" >
                <NavLink
                    to="/"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/sales"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Buy A Home 
                </NavLink>
                <NavLink
                    to="/stories"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Success Stories
                </NavLink>
                <NavLink
                    to="/signup"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Sign Up
                </NavLink>
                <NavLink
                    to="/login"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Log In
                </NavLink>
            </div>
            )
    }else if(!!employee){
        return(
            <div style={{top: "0rem"}} className="NavBar" >
                <NavLink
                    to="/"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/sales"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Buy A Home 
                </NavLink>
                <NavLink
                    to="/new_house"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Add House
                </NavLink>
                <NavLink
                    to="/stories"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Success Stories
                </NavLink>
                <NavLink
                    to="/new_story"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Add Story
                </NavLink>
                <NavLink
                    to="/customer_info"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Employee {employee.first_name}!
                </NavLink>
                <button className="buttonLogoutStyle" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        )
    }
    else{
        return(
            <div style={{top: "0rem"}} className="NavBar" >
                <NavLink
                    to="/"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/sales"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Buy A Home 
                </NavLink>
                <NavLink
                    to="/stories"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Success Stories
                </NavLink>
                <NavLink
                    to="/customer_info"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Welcome {customer.first_name}!
                </NavLink>
                <button className="buttonLogoutStyle" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        )
    }

}

export default NavBar