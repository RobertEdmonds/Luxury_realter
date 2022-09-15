import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from "../context/user.js";
import {EmployeeContext} from '../context/Employee.js';
import House from "./House.js";

function Sales(){
    const {customer} = useContext(UserContext)
    const {employee} = useContext(EmployeeContext)
    const [houses, setHouses] = useState([])
    const [houseInfo, setHouseInfo] = useState([])
    const [toggle, setToggle] = useState(false)
    const history = useHistory()

    useEffect(() => {
        fetch('/houses')
        .then(resp => {
            if(resp.ok){
                resp.json().then(house => setHouses(house))
            }
        })

    },[])

    function handleShowHouse(house){
        if(!customer && !employee){
            history.push("/login")
        }else{
            setHouseInfo([house])
            setToggle(true)
        }
    }

    const showHouses = houses.map(house => {
        return(
            <div key={house.id}>
            <div >
                <img src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                <br/>
                <button className="signUpButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
            </div>
            <br/>
            </div>
        )
    })

    return(
        <>
        {toggle? <House house={houseInfo} toggle={setToggle} /> : showHouses}
        </>
    )
}

export default Sales;