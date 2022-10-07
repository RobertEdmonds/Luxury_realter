import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "../context/Employee.js";
import { UserContext } from "../context/user.js";
import "../styles/House.css";

function House({
  house,
  setBackgroundImage,
  backgroundImage,
  handleShowDelete,
  handleEditPhotos,
}) {
  const { employee } = useContext(EmployeeContext);
  const { customer } = useContext(UserContext);
  const [error, setError] = useState([]);
  const [day, setDay] = useState("Monday");
  const [time, setTime] = useState("1");
  const [schedule, setSchedule] = useState([]);
  const history = useHistory();

  const displayHouse = house.map((home) => {
    const displayMarket = () => {
      if (home.on_market === true && home.under_contract === true) {
        return (
          <h4 key={home.under_contract} style={{ color: "orange" }}>
            Accepting Backup Offers
          </h4>
        );
      } else if (home.on_market === true && home.under_contract === false) {
        return (
          <h4 key={home.under_contract} style={{ color: "green" }}>
            House for sale
          </h4>
        );
      } else if (home.on_market === false && home.under_contract === false) {
        return (
          <h4 key={home.under_contract} style={{ color: "orange" }}>
            Coming Soon
          </h4>
        );
      } else {
        return (
          <h4 key={home.under_contract} style={{ color: "red" }}>
            Sold
          </h4>
        );
      }
    };

    function handleLeftClick(image) {
      const findSpot = home.pictures.find((pic) => pic.picture_url === image);
      if (findSpot.order_number === 1) {
        const lastPhoto = home.pictures.length;
        const newPhoto = home.pictures.find(
          (photo) => photo.order_number === lastPhoto
        );
        setBackgroundImage(newPhoto.picture_url);
      } else {
        const showPhoto = home.pictures.find(
          (photo) => photo.order_number === findSpot.order_number - 1
        );
        setBackgroundImage(showPhoto.picture_url);
      }
    }

    function handleRightClick(image) {
      const findSpot = home.pictures.find((pic) => pic.picture_url === image);
      if (findSpot.order_number === home.pictures.length) {
        const firstPhoto = home.pictures[0].order_number;
        const newPhoto = home.pictures.find(
          (photo) => photo.order_number === firstPhoto
        );
        setBackgroundImage(newPhoto.picture_url);
      } else {
        const showPhoto = home.pictures.find(
          (photo) => photo.order_number === findSpot.order_number + 1
        );
        setBackgroundImage(showPhoto.picture_url);
      }
    }

    return (
      <div key={home.id}>
        {home.pictures.length === 1 ? (
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="houseImageBackground"
          ></div>
        ) : (
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="houseImageBackground"
          >
            <button
              className="leftArrowButton"
              onClick={() => handleLeftClick(backgroundImage)}
            >
              <img
                className="leftArrow"
                src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                alt="Left Arrow"
              />
            </button>
            <button
              className="rightArrowButton"
              onClick={() => handleRightClick(backgroundImage)}
            >
              <img
                className="rightArrow"
                src="https://cdn-icons-png.flaticon.com/512/60/60758.png"
                alt="Right Arrow"
              />
            </button>
            {home.pictures.map((image) => (
              <img
                key={image.id}
                className="clickImage"
                src={image.picture_url}
                alt={image.order_number}
                onClick={() => setBackgroundImage(image.picture_url)}
              />
            ))}
          </div>
        )}
        <div className="houseDescription">
          <h2>$ {home.price.toLocaleString()}</h2>
          <h4>{home.address}</h4>
          <h4>
            {home.city}, {home.state} {home.zip_code}
          </h4>
          {displayMarket()}
          <p>SQFT: {home.sqft}</p>
          <p>Rooms: {home.rooms}</p>
          <p>Baths: {home.bathrooms}</p>
          <p>Pool: {home.pool.toString()}</p>
          <p>Waterfront: {home.waterfront.toString()}</p>
          <p>Condo: {home.condo.toString()}</p>
          <p className="description">{home.description}</p>
        </div>
        {!!employee && (
          <>
            <ul style={{ float: "left", fontWeight: "bold" }}>
              Appointments
              {home.schedules.map((appoint) => {
                return (
                  <li key={appoint.id}>
                    {appoint.day} {appoint.time}pm
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  });
  function handleToggle() {
    history.push("/sales");
  }

  const handleSchedule = (e) => {
    e.preventDefault();
    const formData = {
      day: day,
      time: parseInt(time),
      house_id: house[0].id,
      customer_id: customer.id,
    };
    fetch("/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((sch) => setSchedule(sch));
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };

  useEffect(() => {
    fetch(`/show_schedule/${house[0].id}`)
      .then((resp) => resp.json())
      .then((sched) => setSchedule(sched));
  }, [house]);

  function handleHouseDelete(house) {
    fetch(`/houses/${house[0].id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        handleShowDelete(house[0].id);
        history.push("/sales");
      } else {
        resp.json().then((err) => setError(err.error));
      }
    });
  }

  return (
    <div className="houseDisplay">
      {displayHouse}
      <div>
        {!!schedule && !!customer ? (
          <>
            <h3>{customer.first_name} Scheduled For</h3>
            <h3>
              {schedule.day} at {schedule.time}pm
            </h3>
          </>
        ) : (
          <>
            <ul className="errorStyle">
              {error.map((err) => {
                return <li key={err}>{err}</li>;
              })}
            </ul>
            <form className="scheduleForm" onSubmit={handleSchedule}>
              <label className="dayLabel">
                Day:
                <select
                  className="daySelect"
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
              <label className="timeLabel">
                Time in PM:
                <select
                  className="timeSelect"
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
                style={{ marginLeft: "7%" }}
                type="submit"
              >
                Add Showing
              </button>
            </form>
          </>
        )}
        <br />
        <span style={{ display: "inline-flex" }}>
          <button className="mainButton" onClick={() => handleToggle()}>
            View More Homes
          </button>
          {!!employee && (
            <>
              <h1 style={{ marginLeft: "1rem", marginRight: "1rem" }}>/</h1>
              <button
                className="mainButton"
                onClick={() => handleEditPhotos(house[0].id)}
              >
                Edit Photos
              </button>
              <h1 style={{ marginLeft: "1rem", marginRight: "1rem" }}>/</h1>
              <button
                className="mainButton"
                onClick={() => handleHouseDelete(house)}
              >
                Delete
              </button>
              <h3>{error}</h3>
            </>
          )}
        </span>
      </div>
    </div>
  );
}

export default House;
