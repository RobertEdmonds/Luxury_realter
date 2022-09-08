import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from '../context/user.js'


function LogIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const [loading, setLoading] = useState(false)
    const { setCustomer } = useContext(UserContext)
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        setLoading(false)
        const dataForm = {
            email,
            password
        }
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataForm),
          }).then((r) => {
            setLoading(false);
            if (r.ok) {
              r.json().then((user) => {
                setCustomer(user)
                history.push('/')
            });
            setEmail('')
            setPassword('')
            } else {
              r.json().then((err) => setError(err.errors));
            }
          });
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
            <button type="submit" className="signUpButton">{loading ? "Loading..." : "Log In"}</button>
        </form>
        </>
    )
}

export default LogIn