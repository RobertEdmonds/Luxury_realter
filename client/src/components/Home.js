import React, {useEffect, useState} from "react";

function Home(){
    const [ homeImage, setHomeImage ] = useState([])

    useEffect(()=> {
        fetch('/home_images')
        .then(r => r.json())
        .then(image => setHomeImage(image))
    },[])
    console.log(homeImage)

    return(
        <>
            {homeImage.map(image =>{
                return(
                    <img key={image.img_url} src={image.img_url} alt='checking'/>
                )
            })}

        </>
    )

}

export default Home;