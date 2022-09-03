import React, {useEffect, useState} from "react";
import '../styles/Home.css'

function Home(){
    const [ homeArray, setHomeArray ] = useState([])
    const [ homeImage, setHomeImage ] = useState('')
    const [ idNumber, setIdNumber ] = useState(2)

    useEffect(()=> {
        fetch('/home_images')
        .then(r => r.json())
        .then(image => setHomeArray(image))
    },[])

    useEffect(() => {
        let myInterval = setInterval(() =>{
            setIdNumber(idNumber + 1)
            if(idNumber < homeArray.length ){
                let check = homeArray.filter(image => idNumber === image.id ).map(image => image.img_url)
                setHomeImage(check[0]) 
            }else if(idNumber === homeArray.length){
                let second = homeArray.filter(image => idNumber === image.id ).map(image => image.img_url)
                setHomeImage(second[0]) 
                setIdNumber(1)
            }      
        }, 10000)
        return () => {
            clearInterval(myInterval)
        }
    })
    console.log(homeImage.length)
    if(homeImage.length > 0){
        return(
            <>
                <div  className="imageStyle" style={{backgroundImage: `url(${homeImage})`}}>
                    <br/>
                    <div className="writingBorder">
                        <h1 className="imageWriting">YOUR FLORIDA DREAM HOME AWAITS</h1>
                    </div>
                    <br/>
                    <div className="secondBorder">
                        <h3 className="secondWriting">Luxury & Beach Realty makes it easy to find the home you’re looking for.</h3>
                        <h3 className="secondWriting">Click on the button below and start your search today.</h3>
                    </div>
                </div>
                <div className="bannerStyle">
                    <h2 className="bannerWriting">Realtors...choose the brokerage that works for you, Luxury and Beach Realty</h2>
                </div>
            </>
            )
    }else{
        return(
            <>
                <div  className="imageStyle" style={{backgroundImage: `url(${homeArray.filter(image => homeArray.length === image.id ).map(image => image.img_url)[0]})`}}>
                    <h1 className="imageWriting">hello</h1>
                </div>
                <div className="bannerStyle">
                    <h2 className="bannerWriting">Realtors...choose the brokerage that works for you, Luxury and Beach Realty</h2>
                </div>
            </>
        )}
             

}

export default Home;