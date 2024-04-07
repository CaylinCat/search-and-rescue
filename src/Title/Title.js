import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css'; // Import CSS file for styles

const Title = () => {
  return (
    <div className="background">
      <h1 className="title">Search and Rescue</h1>
      <h2>Main Menu</h2>
      <Link className="links" to="/selection">Selection</Link>
    </div>
  );
}


export default Title;
