import React, { useEffect, useState } from 'react'


const initialState={
    time: "1year ago",
    channel: "yt",
    valid:true,
    title:'',
    views:'',
}
const AddVideo = ({addVideos,updateVideos,editableVideo}) => {

    const[video,setVideo]=useState(initialState);

    function handleChange(e){
      console.log(e.target.value,e.target.name);
      setVideo({...video,[e.target.name]:[e.target.value]});
     
    }
    useEffect(() => {
        if(editableVideo){
     setVideo(editableVideo);
        }
    }, [editableVideo])




    
    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo){
            updateVideos(video);
        }else{
            addVideos(video);
        }
     
     
      setVideo(initialState);
      console.log(video);
    }
  return (
    <form > 
        
        <input type="text" name='title'
         onChange={handleChange} 
         placeholder='title' 
         value={video.title}/>
        <input type="text" name='views' onChange={handleChange} placeholder='views'value={video.views} />
        <button onClick={handleSubmit}>{editableVideo?"Edit":"Add"}Video</button>

        
    </form>
  )
}

export default AddVideo;