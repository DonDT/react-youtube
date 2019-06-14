import React from "react";
import "./VideoGridHeader.scss";

export default function VideoGridheader(props) {
  return (
    <div className="video-grid-header">
      <span className="title">{props.title}</span>
    </div>
  );
}
