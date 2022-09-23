import { useContext } from "react";
import {EmployeeContext} from '../context/Employee.js';
import '../styles/Sales.css'

function Sales({houses , handleEditHouse, handleShowHouse}){
    const {employee} = useContext(EmployeeContext)

    const showHouses = houses.map(house => {
         if(!!employee){
            return(
                    <div className="imageColumn">
                        <img className="image" src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                        <button className="mainButton" onClick={() => handleEditHouse(house)}>Edit House</button>
                    </div>
            )
        }else{
            return(

                    <div className="imageColumn">
                        <img className="image" src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                    </div>
            )
        }
    })

    const setRem = (showHouses.length * 5)

    return(
        <>
             <div className="salesDisplay"  style={{minHeight: `${setRem.toString()}rem`}}>{showHouses}</div>
         </>
    )
}

export default Sales;