import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from "../context/user.js";
import {EmployeeContext} from '../context/Employee.js';
import House from "./House.js";
import '../styles/Sales.css'

function Sales({houses , handleEditHouse}){
    const {customer} = useContext(UserContext)
    const {employee} = useContext(EmployeeContext)
    const [houseInfo, setHouseInfo] = useState([])
    const [toggle, setToggle] = useState(false)
    const [displayFormat, setDisplayFormat] = useState("salesDisplay")
    const [backgroundImage, setBackgroundImage] = useState("")
    const history = useHistory()

    function handleShowHouse(house){
        if(!customer && !employee){
            history.push("/login")
        }else if(house.pictures.length >= 1){
            setBackgroundImage(house.pictures[0].picture_url)
            setDisplayFormat("houseDisplay")
            setHouseInfo([house])
            setToggle(true)
        }else{
            setBackgroundImage("https://freesvg.org/img/1410828243.png")
            setDisplayFormat("houseDisplay")
            setHouseInfo([house])
            setToggle(true)
        }
    }

    const showHouses = houses.map(house => {
        if(house.id % 2 === 0 && house.pictures.length > 0 && !!customer){
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
        }else if(house.id %2 && house.pictures.length > 0 && !!customer){
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
        }else if(house.id % 2 === 0 && house.pictures.length === 0 && !!customer){
            return(
                <div className="rightImageDiv" key={house.id} >
                    <div >
                        <img className="image" src="https://freesvg.org/img/1410828243.png" alt={house.id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                    </div>
                    <br/>
                </div>
            )
        }else if(house.id % 2 === 0 && house.pictures.length > 0 && !!employee){
            return(
                <div className="rightImageDiv" key={house.id} >
                    <div >
                        <img className="image" src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                        <button className="mainButton" onClick={() => handleEditHouse(house)}>Edit House</button>
                    </div>
                    <br/>
                </div>
            )
        }else if(house.id %2 && house.pictures.length > 0 && !!employee){
            return(
                <div className="leftImageDiv" key={house.id} >
                <div >
                    <img className="image" src={house.pictures[0].picture_url} alt={house.pictures[0].id}/>
                    <br/>
                    <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                    <button className="mainButton" onClick={() => handleEditHouse(house)}>Edit House</button>
                </div>
                <br/>
                </div>
            )
        }else if(house.id % 2 === 0 && house.pictures.length === 0 && !!employee){
            return(
                <div className="rightImageDiv" key={house.id} >
                    <div >
                        <img className="image" src="https://freesvg.org/img/1410828243.png" alt={house.id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                        <button className="mainButton" onClick={() => handleEditHouse(house)}>Edit House</button>
                    </div>
                    <br/>
                </div>
            )
        }else if(house.id % 2 && house.pictures.length === 0 && !!employee){
            return(
                <div className="leftImageDiv" key={house.id} >
                    <div >
                        <img className="image" src="https://freesvg.org/img/1410828243.png" alt={house.id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                        <button className="mainButton" onClick={() => handleEditHouse(house)}>Edit House</button>
                    </div>
                    <br/>
                </div>
            )
        }else if(house.id % 2 === 0 && house.pictures.length > 0){
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
        }else if(house.id %2 && house.pictures.length > 0){
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
        }else if(house.id % 2 === 0 && house.pictures.length === 0){
            return(
                <div className="rightImageDiv" key={house.id} >
                    <div >
                        <img className="image" src="https://freesvg.org/img/1410828243.png" alt={house.id}/>
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
                        <img className="image" src="https://freesvg.org/img/1410828243.png" alt={house.id}/>
                        <br/>
                        <button className="mainButton" onClick={() => handleShowHouse(house)}>Get More Info</button>
                    </div>
                    <br/>
                </div>
            )
        }
    })
    const setRem = (showHouses.length * 15)

    function handleAddHouse(){
        history.push("/new_house")
    }

    if(!!employee){
        return(
            <>
            {toggle ? <div className={displayFormat} style={{minHeight: `40rem`}}><House house={houseInfo} toggle={setToggle} setDisplayFormat={setDisplayFormat} setBackgroundImage={setBackgroundImage} backgroundImage={backgroundImage}/></div> : <div className={displayFormat} style={{minHeight: `${setRem.toString()}rem`}}>{showHouses}<button className="mainButton" style={{marginLeft: "7rem", position: "fixed"}}  onClick={() => handleAddHouse()}>Add House</button></div>}   
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