import React, { useState, useContext } from "react";
import '../styles/SignUpForm.css';
import { UserContext } from '../context/user.js'
import { useHistory } from "react-router-dom";

function SignUpForm(){
    const {setCustomer}  = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState([])
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        setError([])
        setLoading(true)
        const dataForm = {
            email: email.toUpperCase(),
            first_name: firstName.toUpperCase(),
            last_name: lastName.toUpperCase(),
            phone_number: parseInt(phoneNumber),
            password,
            password_confirmation: passwordConfirm
        }
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataForm)
        })
        .then((resp) => {
            setLoading(false)
            if(resp.ok){
                resp.json().then(user => {
                    setCustomer(user)
                    history.push('/')
                })
                setEmail("")
                setFirstName("")
                setLastName("")
                setPassword("")
                setPasswordConfirm("")
                setPhoneNumber('')
            }else{
                resp.json().then(err => setError(err.errors))
            }
        })
    }

    function transferLogin(){
        history.push("/login")
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
            <form className="signUpStyle" onSubmit={handleSubmit}>
                <label className="labelStyle">Email Address<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="email"
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
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.trim())}
                    />
                </label>
                <br/>
                <label className="labelStyle">Password<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <label className="labelStyle">Password Confirmation<span className="starStyle">*</span>
                    <br/>
                    <input
                        className="inputStyle"
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </label>
                <br/>
                <button type="submit" className="mainButton">{loading ? "Loading..." : "Sign Up"}</button>
                <br/> 
                <button className="mainButton" onClick={transferLogin}>Log In</button>
            </form>
        </>
    )
}

export default SignUpForm;