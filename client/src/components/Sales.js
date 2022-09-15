import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from "../context/user.js";
import {EmployeeContext} from '../context/Employee.js';
import House from "./House.js";
import '../styles/Sales.css'

function Sales(){
    const {customer} = useContext(UserContext)
    const {employee} = useContext(EmployeeContext)
    const [houses, setHouses] = useState([])
    const [houseInfo, setHouseInfo] = useState([])
    const [toggle, setToggle] = useState(false)
    const [displayFormat, setDisplayFormat] = useState("salesDisplay")
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
            setDisplayFormat("houseDisplay")
            setHouseInfo([house])
            setToggle(true)
        }
    }

    const showHouses = houses.map(house => {
        if(house.id % 2 === 0){
        return(
            <div className="rightImageDiv" key={house.id} >
            <div >
                <img className="image" src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                <br/>
                <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
            </div>
            <br/>
            </div>
        )
        }else{
            return(
                <div className="leftImageDiv" key={house.id} >
                <div >
                    <img className="image" src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                    <br/>
                    <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                </div>
                <br/>
                </div>
            )
        }
    })
    const setRem = (showHouses.length * 15)


    if(!!employee){
        return(
            <>
            {toggle ? <div className={displayFormat} style={{minHeight: `40rem`}}><House house={houseInfo} toggle={setToggle} setDisplayFormat={setDisplayFormat}/></div> : <div className={displayFormat} style={{minHeight: `${setRem.toString()}rem`}}>{showHouses}<button className="mainButton" style={{marginLeft: "7rem", position: "fixed"}}>Add House</button></div>}   
            </>
        )
    }else{
        return(
            <>
            {toggle ? <div className={displayFormat} style={{maxHeight: "40rem"}}><House house={houseInfo} toggle={setToggle} setDisplayFormat={setDisplayFormat}/></div> : <div className={displayFormat} style={{minHeight: `${setRem.toString()}rem`}}>{showHouses}</div>}
            </>
        )
    }
}

export default Sales;