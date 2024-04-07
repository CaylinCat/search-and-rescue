import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css'; // Import CSS file for styles

const Title = () => {
  return (
    <div className="background">
      <div className="logo">Search and Rescue</div>
      <div className="menu-toggle">&#9776;</div>
      <div className="title-container">
        <h1 className="title">Find Your Own Treasure!</h1>
      </div>
      <div className="button-container">
        <a href="/search" className="button search"><img src="search_image.png" alt="Search" />Search</a>
        <a href="/game" className="button mission"><img src="mission_image.png" alt="Mission" /><b>Mission</b></a>
        <button onClick={() => window.open('mailto:info@ncmec.org')} className="button contact"><img src="contact_image.png" alt="Contact" />Contact</button>
      </div>
    </div>
  );
}

export default Title;