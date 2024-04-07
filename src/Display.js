import React, { useState } from 'react';
import './Display.css';
import Card from './Card';

function Display({ cards }) {
    const [nameFilter, setNameFilter] = useState('');
    const [minAgeFilter, setMinAgeFilter] = useState('');
    const [maxAgeFilter, setMaxAgeFilter] = useState('');
    const [visibleCards, setVisibleCards] = useState(9);

    const filteredCards = cards
        .filter(card =>
            card.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
            (minAgeFilter === '' || card.age >= parseInt(minAgeFilter, 10)) &&
            (maxAgeFilter === '' || card.age <= parseInt(maxAgeFilter, 10))
        )
        .sort((a, b) => a.age - b.age)
        .slice(0, visibleCards); // Slice to display only the visible cards

    const loadMoreCards = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 9);
    };

    return (
        <div className="display-container">
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name..."
                className="search-bar"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
            />

            {/* Filter by Age (Min and Max Age Inputs) */}
            <div className="age-filter">
                <input
                    type="number"
                    placeholder="Min Age"
                    value={minAgeFilter}
                    onChange={(e) => setMinAgeFilter(e.target.value)}
                    className="age-input"
                />
                <input
                    type="number"
                    placeholder="Max Age"
                    value={maxAgeFilter}
                    onChange={(e) => setMaxAgeFilter(e.target.value)}
                    className="age-input"
                />
            </div>

            {/* Grid of Cards */}
            <div className="grid-container">
                {filteredCards.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        name={card.name}
                        age={card.age}
                        date={card.date}
                        location={card.location}
                        sex={card.sex}
                        race={card.race}
                        haircolor={card.haircolor}
                        eyecolor={card.eyecolor}
                    />
                ))}
            </div>

            {/* Load More Button */}
            {visibleCards < cards.length && (
                <button onClick={loadMoreCards}>Load More</button>
            )}

        </div>
    );
}

export default Display;