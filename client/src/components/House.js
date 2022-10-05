import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { EmployeeContext } from "../context/Employee.js";
import "../styles/House.css";

function House({
  house,
  setBackgroundImage,
  backgroundImage,
  handleShowDelete,
  handleEditPhotos,
}) {
  const { employee } = useContext(EmployeeContext);
  const [error, setError] = useState("");
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
      </div>
    );
  });
  function handleToggle() {
    history.push("/sales");
  }

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

  function pushToSchedule(){
    history.push(`/make_schedule/${house[0].id}`)
  }

  return (
    <div className="houseDisplay">
      {displayHouse}
      <div>
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
              <h1 style={{ marginLeft: "1rem", marginRight: "1rem" }}>/</h1>
              <button 
                className="mainButton"
                onClick={() => pushToSchedule()}
                >
                  Update Schedule
                </button>
            </>

          )}
        </span>
      </div>
    </div>
  );
}

export default House;
