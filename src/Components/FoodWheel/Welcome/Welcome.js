// React imports
import React, { useState } from "react";

// Material core imports
import { Container } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { IconButton } from "@material-ui/core";
import { Remove } from "@material-ui/icons";
import { Add } from "@material-ui/icons";

import "./Welcome.css";

export default function Welcome() {
  const [locations, setLocations] = useState([ 
    {location: ""},
    {location: ""}
  ]);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState("circle");

  const handleChangeInput = (index, event) => {
    if (index.event !== "") {
      // gets locations state
      const locationValue = [...locations];
      // setting vvvv = to what gets typed in input field "value={input.location}"
      locationValue[index][event.target.name] = event.target.value;

      setLocations(locationValue);
    }
  }

  const handleAddClick = () => {
    if (locations.length < 6) {
      if (locations.length === 2) {
        setLocations([...locations, {location: ""}]);
      }
      else if (locations.length === 3) {
        setLocations([...locations, 
          {location: ""},
          {location: ""},
          {location: ""}
        ]);
      }
    }
    else {
      alert("Currently only a maximum of 6 locations. Working to add more functionality in the future!");
    }
  }

  const handleRemoveClick = (index) => {
    const locationValue = [...locations];

    if (locationValue.length > 2) {
      if (locations.length === 3) {
        locationValue.splice(index, 1);
      }
      else if (locations.length === 6) {
        locationValue.splice(3, 6);
      }

      setLocations(locationValue);
    }
    else {
      alert("Must have at least 2 option. Otherwise you seem to know where you're going.");
    }
  }

  const handleSumbit = (e) => {
    e.preventDefault();

    if (locations.length === 2) {
      const locationWheel = [...locations, 
        {location: ""},
        {location: ""},
        {location: ""},
        {location: ""}
      ];

      locationWheel[2] = locations[0];
      locationWheel[3] = locations[1];
      locationWheel[4] = locations[0];
      locationWheel[5] = locations[1];

      setLocations(locationWheel);
    } 
    else if (locations.length === 3) {
      const locationWheel = [...locations, 
        {location: ""},
        {location: ""},
        {location: ""}
      ];

      locationWheel[3] = locations[0];
      locationWheel[4] = locations[1];
      locationWheel[5] = locations[2];

      setLocations(locationWheel);
    } 

    setShowResults(true);
  }

  const handleRestart = (e) => {
    e.preventDefault();
    
    setLocations([ 
      {location: ""},
      {location: ""}
    ]);

    setShowResults(false);
  }

  const handleSpinClick = () => {

    setName("circle startRotate");

    setTimeout(() => {
      setName("circle startRotate stopRotate");
    }, Math.floor(Math.random() * 7500) + 1);
  }

  return(
    <Container className="containerFW">
      <h1 className="titleFW">Food Wheel</h1>
      {showResults ? (
        <div className="wheelContainer">
          <h3 className="welcomeScript">You're Eating At: </h3>
          <ul className={name}>
            { locations.map((input, index) => (
              <li key={input.index} className="innerCircle">
                <div className="wheelValue" key={Date.now}>
                  {input.location}
                </div>
              </li>
            )) }
          </ul>

          <div id="spin" onClick={handleSpinClick}>
            <div className="innerSpin"></div>
          </div>
            
          <div id="shine"></div>
          <button className="submitBtn" type="submit" onClick={handleRestart}>Click To Retry</button>
        </div>
      ) : (
      <>
        <h3 className="welcomeScript">Enter where your next meal could be from:</h3>
        <span className="disclosure">DISCLOSURE: Unfortunately app only works with inputs as multiples of 6 (up to 6). Working to add more functionality soon!</span>
        <form onSubmit={handleSumbit}>
          { locations.map((input, index) => (
            <div key={input.index}>
              <span className="optionNo">{index + 1}</span>
              <TextField
                name="location"
                className="locationInput"
                key={index}
                label="Enter Food Spot"  
                type="text"
                value={input.location}
                onChange={(event) => handleChangeInput(index,event)}   
              />
              <IconButton onClick={() => handleRemoveClick(index)}>
                <Remove className="removeBtn"/>
              </IconButton>
              <IconButton onClick={() => handleAddClick()}>
                <Add className="addBtn"/>
              </IconButton>  
            </div>
          )) }
        </form>
        <button className="submitBtn" type="submit" onClick={handleSumbit}>Submit</button>
      </>
      )}
    </Container>
  );
}