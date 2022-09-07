import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import {UserContext} from "../context/user.js"


function NavBar(){
    const {customer} = useContext(UserContext)
    console.log(customer)
    const showForCustomer = () => {
        if(!customer){
            return(
                <>
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
                </>
            )
        }else{
            return(
                <>
                <NavLink
                    to="/customer_info"
                    exact="true"
                    className="styleNavBar"
                    activeStyle={{color: "black"}}
                >
                    Welcome {customer.first_name}!
                </NavLink>
                <button className="buttonLogoutStyle" >
                    Log Out
                </button>
                </>
            )
        }
    }
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
            {showForCustomer()}
        </div>
    )

}

export default NavBar