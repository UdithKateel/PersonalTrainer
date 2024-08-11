import React from "react";
import { Link,useNavigate } from "react-router-dom"; 
import UserInfo from "./pages/UserInfo";
export default function ImageComponent() {
  const openKFC=()=>{
    window.location.href="https://online.kfc.co.in/";
  }
  const GotoUserInfo=()=>{
    navigate("/UserInfo")
  }
  return (
    <main className="goggins">
    <img src="./images/goggins-transformation.webp" alt="Transformation" />

     <div className="overlay-content">
       
        <button className="overlay-button" 
        onClick={openKFC}>Choose</button>
        <h1>You Decide</h1>
        <Link to ="/UserInfo">
        <button className="overlay-button" >Choose</button></Link>
      </div>
    </main>
  );
}
