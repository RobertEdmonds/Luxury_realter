import { useContext } from "react";
import { EmployeeContext } from "../context/Employee.js";
import "../styles/Sales.css";

const Sales = ({ houses, handleEditHouse, handleShowHouse }) => {
  const { employee } = useContext(EmployeeContext);
  const setRem = houses.length * 5;

  return (
    <div
      className="salesDisplay"
      style={{ minHeight: `${setRem.toString()}rem` }}
    >
      {houses.map((house) => (
        <div className="imageColumn">
          <img
            className="image"
            src={house.pictures[0].picture_url}
            alt={house.pictures[0].id}
          />
          <br />
          <button className="mainButton" onClick={() => handleShowHouse(house)}>
            Get More Info
          </button>
          {!!employee && (
            <button
              className="mainButton"
              onClick={() => handleEditHouse(house)}
            >
              Edit House
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sales;
