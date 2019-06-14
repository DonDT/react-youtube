import React from "react";
import "./VideoGrid.scss";
import { Divider } from "semantic-ui-react";
import VideoPreview from "../VideoPreview/VideoPreview";
import VideoGridheader from "./VideoGridHeader/VideoGridheader";

export default function VideoGrid(props) {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <div className="video-section">
      <VideoGridheader title="Trending" />
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </div>
  );
}
