import { useContext } from "react";
import VideoDispatchContext from "../VideoDispatchContext";


function useVideoDispatch(){
return useContext(VideoDispatchContext);

}


export default useVideoDispatch;