
import useVideos from '../hooks/Video'
import PlayButton from './PlayButton'
import Video from './Video'
import axios from 'axios';
import { useCallback, useEffect, } from 'react';
import useVideoDispatch from '../hooks/VideoDispatch';

const VideoList = ({editVideo}) => {


 
  const url="https://my.api.mockaroo.com/apidata.json?key=d8017ca0";





  const videos=useVideos();
  const dispatch=useVideoDispatch();


  

  useEffect(()=>{
    async function handleClick(){

      const res= await axios.get(url);
    
        console.log('Get Videos',res.data);
          dispatch({type:'LOAD',payload:res.data});
      }

    handleClick();
  },[dispatch])

 const play= useCallback(()=>console.log("playing"),[])
 const pause= useCallback(()=>console.log("paused"),[])
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
    editVideo={editVideo}
  ><PlayButton

               onPlay={play} 
               onPause={pause} 
               
  >play</PlayButton></Video>)}
 

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