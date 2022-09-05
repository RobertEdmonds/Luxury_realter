import React, { useState } from "react";
import '../styles/SignUpForm.css';

function SignUpForm(){
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const dataForm = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            password: password,
            password_confirmation: passwordConfirm
        }
        console.log(dataForm)
    }
    return(
        <form className="signUpStyle" onSubmit={handleSubmit}>
            <label className="labelStyle">Email Address
                <br/>
                <input
                    className="inputStyle"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br/>
            <label className="labelStyle">First Name
                <br/>
                <input
                    className="inputStyle"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <br/>
            <label className="labelStyle">Last Name
                <br/>
                <input
                    className="inputStyle"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <br/>
            <label className="labelStyle">Phone Number
                <br/>
                <input
                    className="inputStyle"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </label>
            <br/>
            <label className="labelStyle">Password
                <br/>
                <input
                    className="inputStyle"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br/>
            <label className="labelStyle">Password Confirmation
                <br/>
                <input
                    className="inputStyle"
                    type="password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm;