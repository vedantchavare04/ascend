import React from "react";
import "./web.css";
import image from "../components/upper2.png";

export default function ImageMoveLeft() {
  return (
    <div className="slider">
      <div className="slider-track">
        {/* CONTENT BLOCK 1 */}
        <img src={image} className="moving-image" alt="img" />

        {/* CONTENT BLOCK 2 (exact duplicate for seamless loop) */}
        <img src={image} className="moving-image" alt="img-duplicate" />
      </div>
    </div>
  );
}
