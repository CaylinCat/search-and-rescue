import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import { CSVParser } from './csv_parser.js';

// Loads in data set :)
let data_set = await CSVParser();

const GamePage = () => (
  <div>
    <h2>Summoners Rift</h2>
    <Carousel cards={data_set} />
  </div>
);

export default GamePage;