import React from 'react';
import { Link } from 'react-router-dom';

const Selection = () => (
  <div>
    <h2>Selection Page</h2>
    <Link className="links" to="/search">Search</Link>
    <h2>Bob</h2>
    <Link className="links" to="/game">Game</Link>
    <h2>Email</h2>
    <button onClick={() => window.open('mailto:info@ncmec.org')}>Email</button>
  </div>
);

export default Selection;