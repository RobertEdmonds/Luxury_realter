import {useState} from 'react'
import '../styles/EditPhoto.css'

function EditPhoto({houseId, images, handleAddEditPhoto, handleAddPic, handlePhotoDelete}){
    const [picture, setPicture] = useState("https://freesvg.org/img/1410828243.png")
    const [order, setOrder] = useState("1")
    const [toggle, setToggle] = useState(false)
    const [photoId, setPhotoId] = useState(1)
    const [error, setError] = useState([])

    const displayPhotos = images.sort((a, b) => a.order_number > b.order_number ? 1 : -1).map(image => {
        return(
            <img key={image.id} className="clickEditImage" src={image.picture_url} alt={image.order_number} onClick={() => editImage(image)} />
        )
    })

    function editImage(image){
        setPicture(image.picture_url)
        setOrder(image.order_number)
        setPhotoId(image.id)
        setToggle(true)
    }

    function handleAddPhoto(e){
        e.preventDefault()
        const formData = {
            picture_url: picture,
            order_number: parseInt(order),
            house_id: houseId
        }
        fetch("/pictures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(pic => {
                    handleAddPic(pic)
                    setPicture("https://freesvg.org/img/1410828243.png")
                    setOrder("1")
                    setToggle(false)
                })
            }else{
                resp.json().then(err => setError(err.errors))
            }
        })
    }

    function handleEditPhoto(e){
        e.preventDefault()
        const formData = {
            picture_url: picture,
            order_number: parseInt(order),
            house_id: houseId
        }
        const findImage = images.filter(image => image.order_number === formData.order_number)
        const newImage = images.filter(image => image.id === photoId)
        const changeOldImage = images.map(image => {
            if(findImage.length === 0){
                return image
            }else if(image.id === findImage[0].id){
                return {id: findImage[0].id, picture_url: findImage[0].picture_url, order_number: newImage[0].order_number }
            }else{
                return image
            }
        })
        fetch(`/pictures/${photoId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData) 
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(pic => {
                    handleAddEditPhoto(pic, changeOldImage)
                    setPicture("https://freesvg.org/img/1410828243.png")
                    setOrder("1")
                    setPhotoId(1)
                    setToggle(false)
                })
            }else{
                resp.json().then(err => setError(err.errors))
            }
        })
    }

    function handleDeletePhoto(id){
        fetch(`/pictures/${id}`, {
            method: 'DELETE'
        })
        .then(resp => {
            if(resp.ok){
                handlePhotoDelete(id)
                setPicture("https://freesvg.org/img/1410828243.png")
                setOrder("1")
                setPhotoId(1)
                setToggle(false)
            }else{
                resp.json().then(err => setError(err.error))
            }
        })
    }

    return(
        <div style={{textAlign: "center"}}>  
            <div>
                {displayPhotos}
            </div>
            <br/>
            <ul className="errorStyle">
                {error.map(err => {
                    return(
                        <li key={err}>{err}</li>
                    )
                })}
            </ul>
            <div>
                <img className="previewImage" src={picture} alt="edit"/>
            </div>
            <br/>
            <form onSubmit={toggle? handleEditPhoto: handleAddPhoto}>  
                <label className="labelStyle">
                    Picture Url:
                    <br/>
                    <input
                        className="inputStyle"
                        type="text"
                        value={picture}
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </label>
                <br/>
                <label className="labelStyle">
                    Order:
                    <br/>
                    <select
                        className="newHouseInput"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option> 
                    </select>
                </label>
                <br/>
                <button type="submit" className="mainButton">{toggle? "Edit" : "Add"}</button>
            </form>
            {toggle? <button className="mainButton" onClick={() => handleDeletePhoto(photoId)}>Delete</button> : <div></div>}
        </div>
    )
}

export default EditPhoto