import React, { useEffect, useState } from "react";
import useVideoDispatch from "./hooks/VideoDispatch";

const initialState = {
  time: "1year ago",
  channel: "yt",
  valid: true,
  title: "",
  views: "",
};
const AddVideo = ({ editableVideo }) => {
  const [video, setVideo] = useState(initialState);
  const dispatch = useVideoDispatch();

  function handleChange(e) {
    console.log(e.target.value, e.target.name);
    setVideo({ ...video, [e.target.name]: [e.target.value] });
  }
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialState);
    console.log(video);
  }
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? "Edit" : "Add"}Video
      </button>
    </form>
  );
};

export default AddVideo;
