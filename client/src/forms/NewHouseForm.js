import React from "react";
import "../styles/NewHouseForm.css";

function NewHouseForm({
  handleHouseForm,
  setOnMarket,
  onMarket,
  setUnderContract,
  underContract,
  pool,
  setPool,
  waterfront,
  setWaterfront,
  condo,
  setCondo,
  address,
  setAddress,
  city,
  setCity,
  state,
  setState,
  zip,
  setZip,
  rooms,
  setRooms,
  bathrooms,
  setBathrooms,
  sqft,
  setSqft,
  price,
  setPrice,
  description,
  setDescription,
  error,
}) {
  return (
    <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <form onSubmit={handleHouseForm} className="newHouseForm">
        <label className="newHouseLabel">
          Address:
          <input
            className="newHouseInput"
            style={{ width: "25rem" }}
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label className="newHouseLabel">
          City:
          <input
            className="newHouseInput"
            style={{ width: "7rem" }}
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label className="newHouseLabel">
          State:
          <input
            className="newHouseInput"
            style={{ width: "5rem" }}
            type="text"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label className="newHouseLabel">
          Zip Code:
          <input
            className="newHouseInput"
            style={{ width: "5rem" }}
            type="text"
            name="zip_code"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </label>
        <br />
        <label className="newHouseLabel">
          Rooms
          <select
            className="newHouseInput"
            name="rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
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
        <label className="newHouseLabel">
          Bathrooms
          <select
            className="newHouseInput"
            name="bathrooms"
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
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
        <label className="newHouseLabel">
          Square Footage:
          <input
            className="newHouseInput"
            type="text"
            name="sqft"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
          />
        </label>
        <br />
        <label className="newHouseLabel">
          Price:
          <input
            className="newHouseInput"
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label className="newHouseCheckBox">
          Is It On Market?
          <input
            className="newHouseInput"
            type="checkbox"
            name="on_market"
            checked={onMarket}
            onChange={() => setOnMarket(!onMarket)}
          />
        </label>
        <label className="newHouseCheckBox">
          Is It Under Contract?
          <input
            type="checkbox"
            name="under_contract"
            checked={underContract}
            onChange={() => setUnderContract(!underContract)}
          />
        </label>
        <br />
        <label className="newHouseCheckBox">
          Pool?
          <input
            className="newHouseInput"
            type="checkbox"
            name="pool"
            checked={pool}
            onChange={() => setPool(!pool)}
          />
        </label>
        <label className="newHouseCheckBox" style={{ paddingBottom: "5rem" }}>
          Waterfront?
          <input
            className="newHouseInput"
            type="checkbox"
            name="waterfront"
            checked={waterfront}
            onChange={() => setWaterfront(!waterfront)}
          />
        </label>
        <label className="newHouseCheckBox">
          Condo?
          <input
            className="newHouseInput"
            type="checkbox"
            name="condo"
            checked={condo}
            onChange={() => setCondo(!condo)}
          />
        </label>
        <br />
        <br />
        <label className="newHouseDescription">
          Description:
          <br />
          <textarea
            className="newHouseInputDescript"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="mainButton">
          Add House
        </button>
      </form>
    </>
  );
}

export default NewHouseForm;
