import { memo, useState } from "react";

 const PlayButton = memo (function PlayButton({msg, children,onPlay,onPause})  {
  console.log('Reandering button'); 
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
})

export default PlayButton;





