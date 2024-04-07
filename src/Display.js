import React, { useState } from 'react';
import './Display.css';
import Card from './Card';

function Display({ cards }) {
    const [nameFilter, setNameFilter] = useState('');
    const [minAgeFilter, setMinAgeFilter] = useState('');
    const [maxAgeFilter, setMaxAgeFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [hairColorFilter, setHairColorFilter] = useState('');
    const [eyeColorFilter, setEyeColorFilter] = useState('');
    const [visibleCards, setVisibleCards] = useState(9);

    const filteredCards = cards
        .filter(card =>
            card.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
            (minAgeFilter === '' || card.age >= parseInt(minAgeFilter, 10)) &&
            (maxAgeFilter === '' || card.age <= parseInt(maxAgeFilter, 10)) &&
            (locationFilter === '' || card.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
            (hairColorFilter === '' || card.haircolor.toLowerCase().includes(hairColorFilter.toLowerCase())) &&
            (eyeColorFilter === '' || card.eyecolor.toLowerCase().includes(eyeColorFilter.toLowerCase()))
        )
        .sort((a, b) => a.age - b.age)
        .slice(0, visibleCards);

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

            {/* Filter by Age */}
            <div className="filter-container">
                <input
                    type="number"
                    placeholder="Min Age"
                    value={minAgeFilter}
                    onChange={(e) => setMinAgeFilter(e.target.value)}
                    className="filter-input"
                />
                <input
                    type="number"
                    placeholder="Max Age"
                    value={maxAgeFilter}
                    onChange={(e) => setMaxAgeFilter(e.target.value)}
                    className="filter-input"
                />

                {/* Location Filter */}
                <input
                    type="text"
                    placeholder="Location"
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="filter-input"
                />

                {/* Hair Color Filter */}
                <input
                    type="text"
                    placeholder="Hair color"
                    value={hairColorFilter}
                    onChange={(e) => setHairColorFilter(e.target.value)}
                    className="filter-input"
                />

                {/* Eye Color Filter */}
                <input
                    type="text"
                    placeholder="Eye color"
                    value={eyeColorFilter}
                    onChange={(e) => setEyeColorFilter(e.target.value)}
                    className="filter-input"
                />

            </div>

            {/* Cards */}
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