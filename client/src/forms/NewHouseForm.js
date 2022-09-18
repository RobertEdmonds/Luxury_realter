import React, { useState } from "react"
import '../styles/NewHouseForm.css'

function NewHouseForm(){
    const [ address, setAddress ] = useState("")
    const [ city, setCity ] = useState("")
    const [ state, setState] = useState("")
    const [ zip, setZip ] = useState("")
    const [ rooms, setRooms ] = useState("")
    const [ bathrooms,setBathrooms ] = useState("")
    const [ sqft, setSqft ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ onMarket, setOnMarket ] = useState(false)
    const [ underContract, setUnderContract ] = useState(false)

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
            undercontract: underContract,

        }
        console.log(formData)
    }
    console.log(onMarket)
    const handleMarketCheck = () =>{
        setOnMarket(!onMarket)
    }

    return(
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
                    onChange={handleMarketCheck}
                />
            </label>
            <label className="newHouseCheckBox">
                Is It Under Contract?
                <input 
                type='checkbox'
                checked={underContract}
                onChange={() => (!underContract)}
                />
            </label>
            <br/>
            <label className="newHouseCheckBox">
                Pool?
                <input
                    className="newHouseInput"
                    type='checkbox'
                />
            </label>
            <label className="newHouseCheckBox">
                Waterfront?
                <input
                    className="newHouseInput"
                    type='checkbox'
                />
            </label>
            <label className="newHouseCheckBox">
                Condo?
                <input
                    className="newHouseInput" 
                    type='checkbox'
                />
            </label>
            <br/>
            <label className="newHouseDescription" style={{marginTop: "5rem"}}>
                Description:
                <br/>
                <input
                    className="newHouseInput"
                        style={{marginTop: ".5rem"}}
                />
            </label>
            <br/>
            <button type="submit" className="mainButton">Add House</button>
        </form>
    )
}

export default NewHouseForm