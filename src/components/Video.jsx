
import useVideoDispatch from "../hooks/VideoDispatch";

import './Video.css';
const Video = ({ title, channel, views, time, valid, id, children,editVideo }) => {
  const dispatch= useVideoDispatch();
  return (
    <div className="container">
    <button onClick={()=>dispatch({type:'DELETE',payload:id})} className="close">X</button>
    <button onClick={()=>editVideo(id)} className="edit">edit</button>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          textAlign: "center",
          padding: "2px",
          margin: "2px",
        }}
      >
        
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
        <div className="title" style={{ fontWeight: "bold", fontSize: "25px" }}>
          {title}
        </div>
        {views} views <span>.</span> {time}
        {valid && <div>i am valid</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Video;
