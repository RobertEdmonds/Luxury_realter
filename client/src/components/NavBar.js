import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <div>
            <NavLink
                to="/"
                exact="true"
            >
                Home
            </NavLink>
            <NavLink
                to="/sales"
                exact="true"
            >
                Property for sale
            </NavLink>
        </div>
    )

}

export default NavBar