import React from "react";

export default function ImageComponent() {
  const openKFC=()=>{
    window.open("https://online.kfc.co.in/")
  }
  return (
    <main className="goggins">
    <img src="./images/goggins-transformation.webp" alt="Transformation" />

     <div className="overlay-content">
       
        <button className="overlay-button" 
        onClick={openKFC}>Choose</button>
        <h1>You Decide</h1>
        <button className="overlay-button">Choose</button>
      </div>
    </main>
  );
}
