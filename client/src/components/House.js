import {useState, useContext} from 'react';
import {EmployeeContext} from '../context/Employee.js';
import '../styles/House.css';

function House({house, toggle, setDisplayFormat, setBackgroundImage, backgroundImage}){
    const {employee} = useContext(EmployeeContext)
    // const [backgroundImage, setBackgroundImage] = useState("")
    
    const displayHouse = house.map(home => {

        const displayPictures = home.pictures.map(image => {      
                    return(
                        <img key={image.id} className="clickImage" src={image.picture_url} alt={image.order_number} onClick={() => setBackgroundImage(image.picture_url)}/>
                    )})
            
        const displayMarket = () => {
            if(home.on_market === true && home.under_contract === true){
                return(
                    <h4 style={{color: "orange"}}>Accepting Backup Offers</h4>
                )
            }else if(home.on_market === true && home.under_contract === false){
                return(
                    <h4 style={{color: "green"}}>House for sale</h4>
                )
            }else if(home.on_market === false && home.under_contract === false){
                return(
                    <h4 style={{color: "orange"}}>Coming Soon</h4>
                )
            }else{
                return(
                    <h4 style={{color: "red"}}>Sold</h4>
                )
            }
        }
        
        function handleLeftClick(image){
            const findSpot = home.pictures.find(pic => pic.picture_url === image)
            if(findSpot.order_number === 1){
                const lastPhoto = home.pictures.length
                const newPhoto =  home.pictures.find(photo => photo.order_number === lastPhoto)
                setBackgroundImage(newPhoto.picture_url)
            }else{
                const showPhoto = home.pictures.find(photo => photo.order_number === (findSpot.order_number - 1))
                setBackgroundImage(showPhoto.picture_url)
            }
        }

        function handleRightClick(image){
            const findSpot = home.pictures.find(pic => pic.picture_url === image)
            if(findSpot.order_number === home.pictures.length){
                const firstPhoto = home.pictures[0].order_number
                const newPhoto =  home.pictures.find(photo => photo.order_number === firstPhoto)
                setBackgroundImage(newPhoto.picture_url)
            }else{
                const showPhoto = home.pictures.find(photo => photo.order_number === (findSpot.order_number + 1))
                setBackgroundImage(showPhoto.picture_url)
            }
        }
    if(home.pictures.length === 0){
        return(
            <div key={house.id}>
                <div style={{backgroundImage: `url(https://freesvg.org/img/1410828243.png)`}} className="houseImageBackground"></div>
                <div className='houseDescription'>
                    <h2>$ {home.price}</h2>
                    <h4>{home.address}</h4>
                    <h4>{home.city}, {home.state} {home.zip_code}</h4>
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
        )
    }else{
        return(
            <div key={house.id}>
                <div style={{backgroundImage: `url(${backgroundImage})`}} className="houseImageBackground">
                    <button className='leftArrowButton' onClick={() => handleLeftClick(backgroundImage)}><img className='leftArrow' src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt='Left Arrow'/></button>
                    <button className='rightArrowButton' onClick={() => handleRightClick(backgroundImage)}><img className='rightArrow' src='https://cdn-icons-png.flaticon.com/512/60/60758.png' alt='Right Arrow'/></button>
                    {displayPictures}
                </div>
                <div className='houseDescription'>
                    <h2>$ {home.price}</h2>
                    <h4>{home.address}</h4>
                    <h4>{home.city}, {home.state} {home.zip_code}</h4>
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
    )}
    })
    function handleToggle(){
        setDisplayFormat("salesDisplay")
        toggle(false)
    }
    if(!!employee){
        return(
            <div className='houseDisplay'>
                {displayHouse}
                <div>
                    <span style={{display: "inline-flex"}}><button className="mainButton" onClick={() => handleToggle()}>View More Homes</button><h1 style={{marginLeft: "1rem", marginRight: "1rem"}}>/</h1><button className="mainButton">Edit</button></span>
                </div>
            </div>
        )

    }else{   
        return(
            <div className='houseDisplay'>
                {displayHouse}
                <div>
                    <span style={{display: "inline-flex"}}><button className="mainButton" onClick={() => handleToggle()}>View More Homes</button><h1 style={{marginLeft: "1rem", marginRight: "1rem"}}>/</h1><button className="mainButton">Schedule Viewing</button></span>
                </div>
            </div>
        )
    }
}

export default House