import {useEffect, useState} from "react"

function Stories(){
    const [ stories, setStories ] = useState([])

    useEffect(() => {
        fetch("/stories")
        .then(resp => {
            if(resp.ok){
                resp.json().then(story => setStories(story))
            }
            })
      },[])

    return(
        <>
            {stories.map(story => {
                if(story.second_name === undefined){
                    return(
                        <div key={story.id}>
                            <img src={story.picture_url} alt={story.picture_url}/>
                            <h1>{story.name}</h1>
                            <p>{story.description}</p>
                        </div>
                    )
                }else{
                    return(
                        <div key={story.id}>
                            <img src={story.picture_url} alt={story.picture_url}/>
                            <h1>{story.name} & {story.second_name}</h1>
                            <p>{story.description}</p>
                        </div>
                    )
                }
            })
            }
        </>
    )
}

export default Stories