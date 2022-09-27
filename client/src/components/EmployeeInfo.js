import React, {useContext, useState} from "react";
import {EmployeeContext} from "../context/Employee.js";

function EmployeeInfo(){
    const {employee} = useContext(EmployeeContext)
    const [email, setEmail] = useState(employee.email)
    const [firstName, setFirstName] = useState(employee.first_name)
    const [lastName, setLastName] = useState(employee.last_name)
    const [phone, setPhone] = useState(employee.phone_number)
    const [error, setError] = useState([])

    function handleEdit(e){
        e.preventDefault()
        const formData = {
            email,
            first_name: firstName,
            last_name: lastName,
            phone_number: phone
        }
        fetch(`/employee_update`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
        .then(resp => {
            if(resp.ok){
                resp.json()
            }else{
                resp.json(err => setError(err.errors))
            }
        })
    }

    return(
        <>
        <ul className="errorStyle">
                {error.map(err => {
                    return(
                        <li key={err}>{err}</li>
                    )
                })}
        </ul>
        <div style={{textAlign: "center", marginTop: "6.2rem"}}>
            <h1>E# {employee.employee_number}</h1>
            <form onSubmit={handleEdit}>
                <label className="labelStyle">Email<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value.trim())}
                    />
                </label>
                <br/>
                <label className="labelStyle">First Name<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value.trim())}
                    />
                </label>
                <br/>
                <label className="labelStyle">Last Name<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value.trim())}
                    />
                </label>
                <br/>
                <label className="labelStyle">Phone Number<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.trim())}
                    />
                </label>
                <br/>
                <button className="mainButton" type="submit">Update</button>
            </form>
        </div>
        </>
    )
}

export default EmployeeInfo