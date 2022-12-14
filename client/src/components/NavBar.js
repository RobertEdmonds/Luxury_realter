import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { UserContext } from "../context/user.js";
import { EmployeeContext } from "../context/Employee.js";

function NavBar() {
  const { customer, handleLogout } = useContext(UserContext);
  const { employee } = useContext(EmployeeContext);

  if (!customer && !employee) {
    return (
      <div style={{ top: "3rem" }} className="NavBar">
        <NavLink
          to="/"
          exact
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/sales"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Buy A Home
        </NavLink>
        <NavLink
          to="/stories"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Success Stories
        </NavLink>
        <NavLink
          to="/signup"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Log In
        </NavLink>
      </div>
    );
  } else if (!!employee) {
    return (
      <div style={{ top: "0rem" }} className="NavBar">
        <NavLink
          to="/"
          exact
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/sales"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Buy A Home
        </NavLink>
        <NavLink
          to="/new_house"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Add House
        </NavLink>
        <NavLink
          to="/stories"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Success Stories
        </NavLink>
        <NavLink
          to="/new_story"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Add Story
        </NavLink>
        <NavLink
          to="/customer_list"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Customer List
        </NavLink>
        <NavLink
          to="/add_employee"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Add Employee
        </NavLink>
        <NavLink
          to="/employee_info"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          EMPLOYEE {employee.first_name}!
        </NavLink>
        <button className="buttonLogoutStyle" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div style={{ top: "0rem" }} className="NavBar">
        <NavLink
          to="/"
          exact
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/sales"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Buy A Home
        </NavLink>
        <NavLink
          to="/stories"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          Success Stories
        </NavLink>
        <NavLink
          to="/customer_info"
          className="styleNavBar"
          activeStyle={{ color: "black" }}
        >
          WELCOME {customer.first_name}!
        </NavLink>
        <button className="buttonLogoutStyle" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    );
  }
}

export default NavBar;
