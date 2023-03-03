import React from "react";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import Counter from "./Counter";
import data from "./data";
const App = (props) => {
  
  return (
    
    <div className="layout"  >

      <div style={{border:"2px solid grey"}}>

    <h2 style={{display:"flex", justifyContent:"center"}}>Videos</h2>
    <div style={{ display: "flex", justifyContent:"center" }}>
     {data.map(data=> <Video
        key={data.id}
        valid={data.valid}
        title={data.title}
        views={data.views}
        time={data.time}
        channel={data.channel}
        id={data.id}
      ><PlayButton onPlay={()=>console.log("playing",data.title)} onPause={()=>console.log("paused",data.title)} >play</PlayButton></Video>)}
     
     </div>
     
    </div>
    <div style={{  textAlign:"center" ,display:"flex" , justifyContent:"space-evenly" , marginTop:"6vh"}}>
   {/* <PlayButton onPlay={()=>console.log("play")} onPause={()=>console.log("pause")}>play</PlayButton>
   <PlayButton onClick={()=>alert("pause")}>pause</PlayButton>
   */}
   
   </div>
   <Counter/>
    </div>
  );
};

export default App;
