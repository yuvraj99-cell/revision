import React, { useEffect, useRef, useState } from "react";
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
  const inputRef= useRef(null);


  function handleChange(e) {
    console.log(e.target.value, e.target.name);
    setVideo({ ...video, [e.target.name]: [e.target.value] });
  }
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
    inputRef.current.placeholder=""
    inputRef.current.focus()
    // "Type here..".split("").forEach((char,i)=>{
    //   setTimeout(()=>{
    //     inputRef.current.placeholder= inputRef.current.placeholder+char
    //   },500*i)
    // })



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
      ref={inputRef}
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
