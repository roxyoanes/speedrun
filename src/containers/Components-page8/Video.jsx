import React from "react";

const Video = () => (
  <div className="video">
    <div className="video__text-wrapper">
      <h3 className="video__title">Content Video</h3>
      <p className="video__p">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <br />
      <p className="video__p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <br />
      <p className="video__p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </div>
    <div className="video__video-wrapper">
      <iframe src="https://player.vimeo.com/video/146742515?title=0&byline=0&portrait=0" className="video__player" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
    </div>
  </div>
);

export default Video;
