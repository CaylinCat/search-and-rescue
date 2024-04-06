import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => (
  <div>
    <h2>Main Menu</h2>
    <Link className="links" to="/selection">Selection</Link>
  </div>
);

export default Title;