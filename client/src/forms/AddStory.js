import React, { useState } from "react";
import "../styles/AddStory.css";

function AddStory() {
  const [picture, setPicture] = useState(
    "https://freesvg.org/img/johnny_automatic_key.png"
  );
  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

  function handleAddStory(e) {
    e.preventDefault();
    const formData = {
      picture_url: picture,
      name: nameOne,
      second_name: nameTwo,
      description,
    };
    fetch("/stories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json();
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  }

  return (
    <div style={{ maxHeight: "40rem", textAlign: "center", width: "99rem" }}>
      <div style={{ marginTop: "6.2rem", textAlign: "center" }}>
        <img className="previewStoryImage" src={picture} alt="Pre-view" />
      </div>
      <br />
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <form style={{ textAlign: "center" }} onSubmit={handleAddStory}>
        <label className="labelStyle">
          Picture
          <br />
          <input
            className="inputStyle"
            type="text"
            value={picture}
            onChange={(e) => setPicture(e.target.value.trim())}
          />
        </label>
        <br />
        <label className="labelStyle">
          First Name
          <br />
          <input
            className="inputStyle"
            type="text"
            value={nameOne}
            onChange={(e) => setNameOne(e.target.value)}
          />
        </label>
        <br />
        <label className="labelStyle">
          Second Name
          <br />
          <input
            className="inputStyle"
            type="text"
            value={nameTwo}
            onChange={(e) => setNameTwo(e.target.value)}
          />
        </label>
        <br />
        <label className="newHouseDescription">
          Description
          <br />
          <textarea
            className="newHouseInputDescript"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button className="mainButton" type="submit">
          Add Story
        </button>
      </form>
    </div>
  );
}

export default AddStory;
