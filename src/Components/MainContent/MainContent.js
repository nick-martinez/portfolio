import React from "react";
import "./MainContent.css";
import "../../index.css";

function MainContent() {
  return (
    <div className="mainContainer">
      <img 
        src="../../../images/background-1.png"
        alt="cool background" 
        className="backgroundImage"/>
      <h1>Hey! I'm Nick.</h1>
      <h3>Nice to meet ya.</h3>
      <p>I am a front-end website and software developer based out of Los Angeles. I've done a variety of work throughout striving to acquire my Bachelor's degree in Computer Science. I have also managed to use my curious, self-driven spirit to do some self-teaching and complete a number of personal projects. I managed and played a programming role in almost every project that I have been a part of. I am looking bring that sense of enthusiam, drive, and congenial attitude to a long-term development or management career.</p>
      <img
        src="../../../images/headshot.jpg" 
        alt="headshot"
        className="headshot"/>
    </div>
  )
}

export default MainContent;
