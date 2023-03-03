import React from "react";

const Video = ({ title, channel, views, time, valid, id, children }) => {
  return (
    <>
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
    </>
  );
};

export default Video;
