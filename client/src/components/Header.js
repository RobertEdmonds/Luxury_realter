import React from "react";
import NavBar from "./NavBar";
import '../styles/Header.css'


function Header(){
    return(
    <div className="styleHeader">
        <img className="styleImage" src="https://luxuryandbeachrealty.com/wp-content/uploads/2015/05/logo.png" alt="Home" />
        <NavBar />
    </div>
    )
}

export default Header;