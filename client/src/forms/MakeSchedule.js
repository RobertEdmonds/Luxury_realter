import React, { useState } from "react";

function MakeSchedule({ houseId }) {
  const [day, setDay] = useState("Monday");
  const [time, setTime] = useState("1");
  const [error, setError] = useState([]);

  const handleSchedule = (e) => {
    e.preventDefault();
    const formData = {
      day: day,
      time: parseInt(time),
      house_id: houseId,
      customer_id: null
    };
    fetch("/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((sch) => console.log(sch));
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };
  return (
    <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <h1 style={{ textAlign: "center", marginTop: "6.2rem" }}>
        House Id: {houseId}
      </h1>
      <form className="newHouseForm" onSubmit={handleSchedule}>
        <label className="newHouseLabel">
          Day:
          <select
            className="newHouseInput"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </label>
        <label className="newHouseLabel">
          Time in PM:
          <select
            className="newHouseInput"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <br />
        <button
          className="mainButton"
          style={{ marginBottom: "11.98rem" }}
          type="submit"
        >
          Add Schedule
        </button>
      </form>
    </>
  );
}

export default MakeSchedule;
