import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css"

function NavBar(){
    return(
        <div className="NavBar" >
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
                to="/sold"
                exact="true"
                className="styleNavBar"
                activeStyle={{color: "black"}}
            >
                Sold Homes
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

}

export default NavBar