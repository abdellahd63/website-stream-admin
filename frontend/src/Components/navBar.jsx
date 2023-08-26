import { useState } from "react";

export default function MyNavBar({ act, setAct }) {

  return (
    <div className="Navbar">
      <nav>
        <div className="left-nav">
          <div className="menu">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="image"></div>
          <a href="#">
            <div className="logo flex items-center justify-items-center">
             <img src="./Components/assets/Logo.png"/>
            </div>
          </a>
        </div>
        <div className="right-nav">
          <div className="doctor">
            <div className="doctor-pic"></div>
            <div className="doctor-name">
            </div>
          </div>
        </div>
      </nav>
      <div>
       
      </div>
    </div>
  );
}
