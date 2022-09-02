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
            <div  className="homePage" style={{backgroundImage: `url(${homeImage})`}}>
                <h1 >hello</h1>
            </div>)
    }else{
        return(
             <div  className="homePage" style={{backgroundImage: `url(${homeArray.filter(image => 1 === image.id ).map(image => image.img_url)[0]})`}}>
                <h1 style={{backgroundImage: `url(${homeArray.filter(image => 1 === image.id ).map(image => image.img_url)[0]})`}}>hello</h1>
            </div>
        )}
             

}

export default Home;