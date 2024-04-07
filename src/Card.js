import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
      {/* <img src={props.imageUrl} alt="Avatar" className="card-image" /> */}
      <div className="card-info">
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
        <p>Haircolor: {props.haircolor}</p>
        <p>Eyecolor: {props.eyecolor}</p>
        {expanded && <p>Date: {props.date}</p>}
        {expanded && <p>Sex: {props.sex}</p>}
        {expanded && <p>Race: {props.race}</p>}
      </div>
    </div>
  );
}

export default Card;