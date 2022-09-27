import React, {useEffect, useContext, useState} from 'react';
import '../styles/App.css';
import Header from './Header';
import { useHistory, Route } from "react-router-dom";
import Home from "./Home";
import Sales from './Sales';
import Footer from './Footer';
import SignUpForm from '../forms/SignUpForm';
import LogIn from '../forms/LogIn';
import NewHouseForm from '../forms/NewHouseForm';
import House from './House';
import Stories from './Stories';
import AddStory from '../forms/AddStory';
import EmployeeInfo from './EmployeeInfo';
import {UserContext} from "../context/user.js";
import {EmployeeContext} from "../context/Employee.js";
import EditPhoto from '../forms/EditPhoto';



function App(){
  const {setCustomer, customer} = useContext(UserContext)
  const {setEmployee, employee} = useContext(EmployeeContext)
  const [houses, setHouses] = useState([])
  const [ editing, setEditing ] = useState(false)
  const [ onMarket, setOnMarket ] = useState(false)
  const [ underContract, setUnderContract ] = useState(false)
  const [ pool, setPool ] = useState(false)
  const [ waterfront, setWaterfront ] = useState(false)
  const [ condo, setCondo ] = useState(false)
  const [ address, setAddress ] = useState("")
  const [ city, setCity ] = useState("")
  const [ state, setState] = useState("")
  const [ zip, setZip ] = useState("")
  const [ rooms, setRooms ] = useState("1")
  const [ bathrooms,setBathrooms ] = useState("1")
  const [ sqft, setSqft ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ error, setError ] = useState([])
  const [ houseId, setHouseId ] = useState(0)
  const [houseInfo, setHouseInfo] = useState([])
  const [toggle, setToggle] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState("")
  const [ houseImages, setHouseImages ] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch("/me")
    .then(resp => {
        if(resp.ok){
            resp.json().then(user => setCustomer(user))
        }
        })
  },[])

  useEffect(() => {
    fetch("/employee")
    .then(resp => {
        if(resp.ok){
            resp.json().then(user => setEmployee(user))
        }
        })
  },[])

  useEffect(() => {
    fetch('/houses')
    .then(resp => {
        if(resp.ok){
            resp.json().then(house => setHouses(house))
        }
    })

  },[])

  function handleEditNewHouse(e){
    e.preventDefault()
    const formData = {
      address: address.toUpperCase(),
      city: city.toUpperCase(),
      state: state.toUpperCase(),
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
  fetch(`/houses/${houseId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
  })
  .then(resp => {
      if(resp.ok){
          resp.json().then(house => handleAddEditHouse(house))
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
          setHouseId(0)
          setEditing(false)
          history.push('/sales')
      }else{
          resp.json().then(err => setError(err.errors))
      }
  })

  }

  function handleEditHouse(info){
    setAddress(info.address)
    setCity(info.city)
    setState(info.state)
    setZip(info.zip_code)
    setRooms(info.rooms)
    setBathrooms(info.bathrooms)
    setPrice(info.price)
    setSqft(info.sqft)
    setDescription(info.description)
    setOnMarket(info.on_market)
    setUnderContract(info.under_contract)
    setPool(info.pool)
    setWaterfront(info.waterfront)
    setCondo(info.condo)
    setHouseId(info.id)
    setEditing(true)
    history.push('/new_house')
  }

  function handleAddEditHouse(item){
    const updatedItem = houses.map(house => {
      if(house.id === item.id){
        return item
      }else{
        return house
      }
    })
    setHouses(updatedItem)
  }

  function handleAddNewHouse(e){
    e.preventDefault()
    const formData = {
        address: address.toUpperCase(),
        city: city.toUpperCase(),
        state: state.toUpperCase(),
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
    fetch("/houses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData) 
    })
    .then(resp => {
        if(resp.ok){
            resp.json().then(house => handleAddHouse(house))
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

  function handleAddHouse(newHouse){
      setHouses([...houses, newHouse])
  }

  function handleShowDelete(id){
    const updatedItem = houses.filter(house => house.id !== id)
    setHouses(updatedItem)
  }

  function handleShowHouse(house){
    if(!customer && !employee){
        history.push("/login")
    }else{
        fetch(`houses/${house.id}`)
        .then(resp => {
            if(resp.ok){
                resp.json().then(house => {
                    setHouseInfo([house])
                    setHouseId(house.id)
                    setBackgroundImage(house.pictures[0].picture_url)
                    history.push(`/house/${house.id}`)
                })
            }else{
                resp.json().then(err => console.log(err))
            }
        })
      }}

      function handleEditPhotos(houseId){
        fetch(`/houses/${houseId}`)
        .then(resp => resp.json())
        .then(house => {
          setHouseImages(house.pictures)
        history.push(`/edit_photos/${houseId}`)
        })
      }

      function handleAddPic(image){
        setHouseImages([...houseImages, image])
      }

      function handleAddEditPhoto(item, changeOldImage){
        const updatedItem = changeOldImage.map(image => {
          if(image.id === item.id){
            return(item)
          }else{
            return(image)
          }
        })
        setHouseImages(updatedItem)
      }

      function handlePhotoDelete(id){
        const updatedItem = houseImages.filter(photo => photo.id !== id)
        setHouseImages(updatedItem)
      }
      
  return (
    
    <div>
      <Header />
      <br/>
      <Route exact path="/">
          <Home />
      </Route>
      <Route exact path="/sales">
          <Sales  houses={houses} handleEditHouse={handleEditHouse} handleShowDelete={handleShowDelete} handleShowHouse={handleShowHouse} setToggle={setToggle} toggle={toggle} />
      </Route>
      <Route exact path={`/house/${houseId}`}>
          <House house={houseInfo} handleShowDelete={handleShowDelete} setBackgroundImage={setBackgroundImage} backgroundImage={backgroundImage} houseId={houseId} handleEditPhotos={handleEditPhotos}/>
      </Route>
      <Route exact path={`/edit_photos/${houseId}`}>
        <EditPhoto houseId={houseId} images={houseImages} handleAddEditPhoto={handleAddEditPhoto} handleAddPic={handleAddPic} handlePhotoDelete={handlePhotoDelete}/>
      </Route>
      <Route exact path="/stories">
          <Stories />
      </Route>
      <Route exact path="/new_story">
          <AddStory />
      </Route>
      <Route exact path="/signup">
          <SignUpForm />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/employee_info">
        <EmployeeInfo />
      </Route>
      <Route exact path="/new_house">
        <NewHouseForm handleHouseForm={editing? handleEditNewHouse : handleAddNewHouse} setOnMarket={setOnMarket} onMarket={onMarket} setUnderContract={setUnderContract} underContract={underContract} pool={pool} setPool={setPool} waterfront={waterfront} setWaterfront={setWaterfront} condo={condo} setCondo={setCondo} address={address} setAddress={setAddress} city={city} setCity={setCity} state={state} setState={setState} zip={zip} setZip={setZip} rooms={rooms} setRooms={setRooms} bathrooms={bathrooms} setBathrooms={setBathrooms} sqft={sqft} setSqft={setSqft} price={price} setPrice={setPrice} description={description} setDescription={setDescription} error={error} />
      </Route>
      <br/>
      <Footer />
    </div>
  );
}

export default App;
