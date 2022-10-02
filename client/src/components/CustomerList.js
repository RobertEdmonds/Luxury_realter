import React, {useEffect, useState} from "react"
import '../styles/CustomerList.css'

function CustomerList(){
    const [customerList, setCustomerList] = useState([])

    useEffect(() => {
        fetch('/customers')
        .then(resp => resp.json())
        .then(person => setCustomerList(person))
    },[])

    const displayCustomer = customerList.map(cust => {
        return(
            <div key={cust.id} className='custColumn'>
                <h4 className="custRow">{cust.id}</h4>
                <h4 className="custRow">{cust.full_name}</h4>
                <h4 className="custRow">{cust.email}</h4>
                <h4 className="custRow">{cust.phone_number}</h4>
            </div>
        )
    })

    const setRem = (customerList.length * 3)

    return(
        <div style={{marginTop: "6.2rem", minHeight: `${setRem.toString()}rem`}}>
            {displayCustomer}
        </div>
    )
}

export default CustomerList