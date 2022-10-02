import React, { useState } from "react";

const EmployeeContext = React.createContext();

function EmployeeProvider({ children }) {
  const [employee, setEmployee] = useState(null);

  return (
    <EmployeeContext.Provider value={{ setEmployee, employee }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export { EmployeeContext, EmployeeProvider };
