import "./App.css";
import React, { useContext, useReducer, useState } from "react";
import AddVideo from "./AddVideo";
import VideoList from "./components/VideoList";
import data from "./data";
import TheamContext from "./TheamContext";
import VideoContext from "./VideoContext";
import VideoDispatchContext from "./VideoDispatchContext";
import Counter from "./components/Counter";
const App = () => {
  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
        
      case "LOAD":
        return action.payload;

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, []);

  //const [videos, setVideos]=useState(data);

  // function addVideos(video){
  //   dispatch({type:'ADD',payload:video});
  // setVideos([...videos,
  //      {...video, id:videos.length+1}
  //   ]);

  // }

  // function deleteVideo(id){
  //  console.log('deleteVideo');
  //  dispatch({type:'DELETE',payload:id});
  //  setVideos( videos.filter(video=>video.id!==id)
  //  );

  // }

  function editVideo(id) {
    console.log("editVideo");
    setEditableVideo(videos.find((video) => video.id === id));
  }

  // function updateVideos(video){
  //   dispatch({type:'UPDATE',payload:video});
  //   const index=videos.findIndex(v=>v.id===video.id)
  //   const newVideos= [...videos]
  //   newVideos.splice(index,1,video);
  // setVideos(newVideos);
  //   }

  const theamContext = useContext(TheamContext);
  console.log({ theamContext });

  return (
    <div className={`App ${theamContext}`}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className="layout">
            <AddVideo editableVideo={editableVideo}></AddVideo>

            <VideoList editVideo={editVideo} />
          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
      <Counter/>
    </div>
  );
};

export default App;
