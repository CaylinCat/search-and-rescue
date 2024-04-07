import React from 'react';
import { Link } from 'react-router-dom';
import './Title.css';

const Title = () => {
  return (
    <div className="background">
      <div className="logo">Search and Rescue</div>
      <div className="menu-toggle">&#9776;</div>
      <div className="title-container">
        <h1 className="title">Find Your Own Treasure!</h1>
        <h2 className="subtitle">Help rescue missing children in America</h2>
      </div>
      <div className="button-container">
        <a href="/search" className="button search" data-tooltip="Search for missing children in the database"><img src="search_image.png" alt="Search" />Search</a>
        <a href="/game" className="button mission" data-tooltip="Embark on a mission of missing children around you"><img src="mission_image.png" alt="Mission" /><b>Mission</b></a>
        <button onClick={() => window.open('mailto:info@ncmec.org')} className="button contact" data-tooltip="Contact us for assistance or inquiries."><img src="contact_image.png" alt="Contact" />Contact</button>
      </div>
    </div>
  );
}

export default Title;