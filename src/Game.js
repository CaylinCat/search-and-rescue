import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { CSVParser } from './csv_parser.js';
import './Game.css';

// Loads in data set :)
let data_set = await CSVParser();

const GamePage = () => {
    const [location, setLocation] = useState('');
    const [maxAge, setMaxAge] = useState('');

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleMaxAgeChange = (e) => {
        setMaxAge(e.target.value);
    };

    return (
        <div>
            <h1>Find that Child!</h1>
            <h2>Help locate the child near you</h2>
            <input
                type="text"
                placeholder="Enter your location (City, State)"
                value={location}
                onChange={handleLocationChange}
            />
            <input
                type="number"
                placeholder="Maximum Age"
                value={maxAge}
                onChange={handleMaxAgeChange}
            />
            <Carousel
                cards={data_set}
                targetLocation={location}
                maxAge={maxAge}
            />
        </div>
    );
};

export default GamePage;