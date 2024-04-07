import React from 'react';
import { Link } from 'react-router-dom';
import Display from './Display';
import './SearchPage.css';
import { CSVParser } from './csv_parser.js';

// Loads in data set :)
let data_set = await CSVParser();
console.log(data_set);

const SearchPage = () => (
  <div className='searchbody'>
    <h2 className='searchboy'>Search for Missing Kids🏊‍♂️</h2>
    <Display cards={data_set} />
  </div>
);

export default SearchPage;