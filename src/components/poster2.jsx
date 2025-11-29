import React from "react";
import "./web.css";
import lower from "../components/lower.png";

export default function ImageMoveRight() {
  return (
    <div className="slider1">
      <div className="slider-track-right">
        {/* CONTENT BLOCK 1 */}
        <img src={lower} className="moving-image-right" alt="img" />

        {/* CONTENT BLOCK 2 (duplicate for seamless loop) */}
        <img src={lower} className="moving-image-right" alt="img-duplicate" />
      </div>
    </div>
  );
}