import { useContext } from "react";
import VideoContext from "../VideoContext";



function useVideos(){
return useContext(VideoContext);

}


export default useVideos;