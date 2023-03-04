import React from 'react'
import PlayButton from './PlayButton'
import Video from './Video'

const VideoList = ({videos,deleteVideo,editVideo}) => {
  return (
    <div>
         <div style={{border:"2px solid grey"}}>

<h2 style={{display:"flex", justifyContent:"center"}}>Videos</h2>
<div style={{ display: "flex", justifyContent:"center" }}>
 {videos.map(videos=> <Video
    key={videos.id}
    valid={videos.valid}
    title={videos.title}
    views={videos.views}
    time={videos.time}
    channel={videos.channel}
    id={videos.id}
    deleteVideo={deleteVideo}
    editVideo={editVideo}
  ><PlayButton onPlay={()=>console.log("playing",videos.title)} onPause={()=>console.log("paused",videos.title)} >play</PlayButton></Video>)}
 
 </div>
 
</div>
<div style={{  textAlign:"center" ,display:"flex" , justifyContent:"space-evenly" , marginTop:"6vh"}}>
{/* <PlayButton onPlay={()=>console.log("play")} onPause={()=>console.log("pause")}>play</PlayButton>
<PlayButton onClick={()=>alert("pause")}>pause</PlayButton>
*/}

</div>
    </div>
  )
}

export default VideoList