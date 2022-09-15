import {useState, useContext} from 'react';
import {UserContext} from "../context/user.js";
import {EmployeeContext} from '../context/Employee.js';
import '../styles/House.css';

function House({house, toggle}){
    const {customer} = useContext(UserContext)
    const {employee} = useContext(EmployeeContext)
    const [backgroundImage, setBackgroundImage] = useState(house[0].pictures[0].picture_url)
   
    const displayHouse = house.map(home => {
        const displayPictures = home.pictures.map(image => {
            return(
                <img key={image.id} className="clickImage" src={image.picture_url} alt={image.order_number} onClick={() => setBackgroundImage(image.picture_url)}/>
            )
        })

        const displayMarket = () => {
            if(home.on_market === true && home.undercontract === true){
                return(
                    <p>Accepting Backup Offers</p>
                )
            }else if(home.on_market === true && home.undercontract === false){
                return(
                    <p>House for sale</p>
                )
            }else if(home.on_market === false && home.undercontract === false){
                return(
                    <p>Coming Soon</p>
                )
            }else{
                return(
                    <p>Sold</p>
                )
            }
        }
        if(!!employee){
            return(
                <>
                    <div style={{backgroundImage: `url(${backgroundImage})`}} className="houseImageBackground">
                        <button className='leftArrowButton'><img className='leftArrow' src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt='Left Arrow'/></button>
                        <button className='rightArrowButton'><img className='rightArrow' src='https://cdn-icons-png.flaticon.com/512/60/60758.png' alt='Right Arrow'/></button>
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
                        
                    </div>
                </>
            )
        }

    })

    return(
        <div className='houseDisplay'>
            {displayHouse}
            <div>
                <button className="signUpButton" onClick={() => toggle(false)}>View More Homes</button>
            </div>
        </div>
    )
}

export default House