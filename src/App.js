import React, { useReducer, useState } from "react";
import AddVideo from "./AddVideo";
import VideoList from "./components/VideoList";
import data from "./data";
const App = () => {

  function videoReducer(){

  }

  const[videos,dispatch]=useReducer(videoReducer,data)

  //const [videos, setVideos]=useState(data);
  const [editableVideo,setEditableVideo]=useState(null);

  function addVideos(video){
    dispatch({type:'ADD',payload:video})
    setVideos([...videos,
         {...video, id:videos.length+1}
      ]);
     

  }

  function deleteVideo(id){
   console.log('deleteVideo');
   setVideos( videos.filter(video=>video.id!==id)
   );
  
  }
  
  function editVideo(id){
  console.log('editVideo');
  setEditableVideo(videos.find(video=>video.id===id))
  }



  function updateVideos(video){
    const index=videos.findIndex(v=>v.id===video.id)
    const newVideos= [...videos]
    newVideos.splice(index,1,video);
   setVideos(newVideos);
    }

  
  return (
    
    <div className="layout"  >

      <AddVideo addVideos={addVideos} editableVideo={editableVideo}  updateVideos={updateVideos}></AddVideo>

    <VideoList 
    deleteVideo={deleteVideo}
    editVideo={editVideo}
    videos={videos}
     />

     
    </div>
  );
};

export default App;
