import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-description"></div>
          </div>
        ))}



        
    </div>
  );
};

export default Shimmer;
