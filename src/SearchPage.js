import React from 'react';
import { Link } from 'react-router-dom';
import Display from './Display';

// Loads in data set :)
const utility = require("./csv_parser");
let data_set = utility.CSVParser();
console.log(data_set);

const cards = [
    { imageUrl: 'image1.jpg', name: 'John Doe', age: 25, date: '2024-04-06' },
    { imageUrl: 'image2.jpg', name: 'Jane Smith', age: 30, date: '2024-04-05' },
    { imageUrl: 'image3.jpg', name: 'Bob Johnson', age: 40, date: '2024-04-04' },
    { imageUrl: 'image3.jpg', name: 'Eugene Pee', age: 2, date: '2022-03-01' },
    { imageUrl: 'image1.jpg', name: 'John Doe', age: 25, date: '2024-04-06' },
    { imageUrl: 'image2.jpg', name: 'Jane Smith', age: 30, date: '2024-04-05' },
    { imageUrl: 'image3.jpg', name: 'Bob Johnson', age: 40, date: '2024-04-04' },
    { imageUrl: 'image3.jpg', name: 'Eugene Lee', age: 5, date: '2022-03-01' },
    { imageUrl: 'image1.jpg', name: 'John Doe', age: 25, date: '2024-04-06' },
    { imageUrl: 'image2.jpg', name: 'Jane Smith', age: 30, date: '2024-04-05' },
    { imageUrl: 'image3.jpg', name: 'Bob Johnson', age: 40, date: '2024-04-04' },
    { imageUrl: 'image3.jpg', name: 'Eugene Dee', age: 7, date: '2022-03-01' },
];

console.log(cards);

const SearchPage = () => (
  <div>
    <h2>Search Beep Boop</h2>
    <Display cards={cards} />
  </div>
);

export default SearchPage;