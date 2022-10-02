import { useEffect, useState } from "react";
import "../styles/Stories.css";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/stories").then((resp) => {
      if (resp.ok) {
        resp.json().then((story) => setStories(story));
      }
    });
  }, []);

  return (
    <div className="storyRow">
      {stories.map((story) => (
        <div key={story.id} className="storyColumn">
          <img
            className="storiesImage"
            src={story.picture_url}
            alt={story.picture_url}
          />
          {story.second_name === "" ? (
            <h3 style={{ color: "navy", marginBottom: "0rem" }}>
              {story.name}
            </h3>
          ) : (
            <h3 style={{ color: "navy", marginBottom: "0rem" }}>
              {story.name} & {story.second_name}
            </h3>
          )}
          <p className="storyDescription">{story.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
