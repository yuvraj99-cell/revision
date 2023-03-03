import { useState } from "react";

const PlayButton = ({msg, children,onPlay,onPause}) => {
  console.log('Reandering counter'); 
  const[ playing , setPlaying]=useState(false);   // dont use this approch
  function handleClick(){
  if(playing) onPause()
   else  onPlay();
   setPlaying (!playing);
  }
  return (
    <div>
        <button onClick={handleClick} >{children}:{playing ? '⏯️':'pause'}</button>
    </div>
  )
}

export default PlayButton;





