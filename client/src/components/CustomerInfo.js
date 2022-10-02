import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.js";

function CustomerInfo() {
  const { setCustomer, customer } = useContext(UserContext);
  const [email, setEmail] = useState(customer.email);
  const [firstName, setFirstName] = useState(customer.first_name);
  const [lastName, setLastName] = useState(customer.last_name);
  const [phone, setPhone] = useState(customer.phone_number);
  const [error, setError] = useState([]);

  function handleEdit(e) {
    e.preventDefault();
    const formData = {
      email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
    };
    fetch(`/customer_update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((worker) => setCustomer(worker));
      } else {
        resp.json((err) => setError(err.errors));
      }
    });
  }

  return (
    <div style={{ marginTop: "6.2rem", maxHeight: "30rem" }}>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleEdit}>
          <label className="labelStyle">
            Email<span className="starStyle">*</span>
            <br />
            <input
              className="inputStyle"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </label>
          <br />
          <label className="labelStyle">
            First Name<span className="starStyle">*</span>
            <br />
            <input
              className="inputStyle"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value.trim())}
            />
          </label>
          <br />
          <label className="labelStyle">
            Last Name<span className="starStyle">*</span>
            <br />
            <input
              className="inputStyle"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value.trim())}
            />
          </label>
          <br />
          <label className="labelStyle">
            Phone Number<span className="starStyle">*</span>
            <br />
            <input
              className="inputStyle"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value.trim())}
            />
          </label>
          <br />
          <button className="mainButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerInfo;
