import React from 'react'
import "./home.css";
// import {Link} from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="text">
          <div className="line1">
            <h1>IT'S TIME </h1>
          </div>
          <div className="line2">
            <h1>TO </h1>
          </div>
          <div className="line3">
            <h1>SUIT UP !! </h1>
          </div>
        </div>
        <div className="image">
          <img className="suit-image" src="./images/suit.svg" alt="" />
        </div>
      </div>
      <div className="round1_button">
          
        <button className="round1btn"> ROUND 1</button>
        
      </div>
      
    </div>
  )
}

export default Home
