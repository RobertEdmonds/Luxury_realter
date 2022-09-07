import React, {useState} from "react";

const UserContext = React.createContext()

function UserProvider({children}){
    const[customer, setCustomer] = useState(null);

    function handleLogout(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setCustomer(null);
            }
        })
    }

    if(!customer){
        return (
            <UserContext.Provider value={{setCustomer}}>
                {children}
            </UserContext.Provider>
        )
    }else{
        return (
            <UserContext.Provider value={{customer, handleLogout}}>
                {children}
            </UserContext.Provider>
        )

    }
}

export {UserContext, UserProvider}