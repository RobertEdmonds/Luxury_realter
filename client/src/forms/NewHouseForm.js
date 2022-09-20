import React, { useState } from "react"
import '../styles/NewHouseForm.css'

function NewHouseForm({addNewHouse}){
    const [ address, setAddress ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState] = useState("")
    const [ zip, setZip ] = useState("")
    const [ rooms, setRooms ] = useState("1")
    const [ bathrooms,setBathrooms ] = useState("1")
    const [ sqft, setSqft ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ onMarket, setOnMarket ] = useState(false)
    const [ underContract, setUnderContract ] = useState(false)
    const [ pool, setPool ] = useState(false)
    const [ waterfront, setWaterfront ] = useState(false)
    const [ condo, setCondo ] = useState(false)
    const [ description, setDescription ] = useState("")
    const [ error, setError ] = useState([])


    function handleNewHouseSubmit(e){
        e.preventDefault()
        const formData = {
            address,
            city,
            state,
            zip_code: parseInt(zip),
            rooms: parseInt(rooms),
            bathrooms: parseInt(bathrooms),
            sqft: parseInt(sqft),
            price: parseInt(price),
            on_market: onMarket,
            under_contract: underContract,
            pool,
            waterfront,
            condo,
            description
        }
        console.log(formData)
        fetch("/houses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(house => addNewHouse(house))
                setAddress("")
                setCity("")
                setState("")
                setZip("")
                setRooms("1")
                setBathrooms("1")
                setPrice("")
                setSqft("")
                setDescription("")
                setOnMarket(false)
                setUnderContract(false)
                setPool(false)
                setWaterfront(false)
                setCondo(false)
            }else{
                resp.json().then(err => setError(err.errors))
            }
        })
    }

    return(
        <>
            <ul className="errorStyle">
                {error.map(err => {
                    return(
                        <li key={err}>{err}</li>
                    )
                })}
            </ul>
            <form onSubmit={handleNewHouseSubmit} className="newHouseForm">
                <label className="newHouseLabel">
                    Address:
                    <input 
                        className="newHouseInput"
                        style={{width: "25rem"}}
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <br/>
                <label className="newHouseLabel">
                    City:
                    <input
                        className="newHouseInput"
                        style={{width: "7rem"}}
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
                        style={{width: "5rem"}}
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
                        style={{width: "5rem"}}
                        type="text"
                        name="zip"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </label>
                <br/>
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
                <br/>
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
                <br/>
                <label className="newHouseCheckBox">
                    Is It On Market? 
                    <input 
                        className="newHouseInput"
                        type='checkbox'
                        checked={onMarket}
                        onChange={() => setOnMarket(!onMarket)}
                    />
                </label>
                <label className="newHouseCheckBox">
                    Is It Under Contract?
                    <input 
                    type='checkbox'
                    checked={underContract}
                    onChange={() => setUnderContract(!underContract)}
                    />
                </label>
                <br/>
                <label className="newHouseCheckBox">
                    Pool?
                    <input
                        className="newHouseInput"
                        type='checkbox'
                        checked={pool}
                        onChange={() => setPool(!pool)}
                    />
                </label>
                <label className="newHouseCheckBox" style={{paddingBottom: "5rem"}}>
                    Waterfront?
                    <input
                        className="newHouseInput"
                        type='checkbox'
                        checked={waterfront}
                        onChange={() => setWaterfront(!waterfront)}
                    />
                </label>
                <label className="newHouseCheckBox">
                    Condo?
                    <input
                        className="newHouseInput" 
                        type='checkbox'
                        checked={condo}
                        onChange={() => setCondo(!condo)}
                    />
                </label>
                <br/>
                <br/>
                <label className="newHouseDescription">
                    Description:
                    <br/>
                    <textarea
                        className="newHouseInputDescript"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        // style={{marginTop: ".5rem"}}
                    />
                </label>
                <br/>
                <button type="submit" className="mainButton">Add House</button>
            </form>
        </>
    )
}

export default NewHouseForm