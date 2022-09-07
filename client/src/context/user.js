import React, {useState} from "react";

const UserContext = React.createContext()

function UserProvider({children}){
    const[customer, setCustomer] = useState(null);

    if(!customer){
        return (
            <UserContext.Provider value={{setCustomer}}>
                {children}
            </UserContext.Provider>
        )
    }else{
        return (
            <UserContext.Provider value={{customer}}>
                {children}
            </UserContext.Provider>
        )

    }
}

export {UserContext, UserProvider}