import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "../context/Employee.js";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const { setEmployee } = useContext(EmployeeContext);
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setEmployee(null);
        setCustomer(null);
        history.push("/");
      }
    });
  }

  return (
    <UserContext.Provider value={{ setCustomer, customer, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
