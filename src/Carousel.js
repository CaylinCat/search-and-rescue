import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({ cards, targetLocation, maxAge }) => {
    const filteredCards = cards.filter(card => {
        const [city, state] = targetLocation ? targetLocation.toLowerCase().split(', ') : ['', '']; // Split location into city and state
        const isInLocation = !city || card.location.toLowerCase().includes(city); // Check if city matches location
        const isInRange = !maxAge || card.age <= maxAge; // Check if age is below or equal to maxAge
        return isInLocation && isInRange;
    });
    
    let finalFilteredCards = filteredCards;
    if (filteredCards.length < 10) {
        const remainingCards = cards.filter(card => {
            const [city, state] = targetLocation ? targetLocation.toLowerCase().split(', ') : ['', '']; // Split location into city and state
            const isInState = state && card.location.toLowerCase().endsWith(state); // Check if state matches location
            const isInRange = !maxAge || card.age <= maxAge; // Check if age is below or equal to maxAge
            return isInState && isInRange;
        }).slice(0, 10 - filteredCards.length); // Get remaining cards to fill up to 10
        finalFilteredCards = [...filteredCards, ...remainingCards];
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        swipeToSlide: true,
        focusOnSelect: true
    };

    return (
        <Slider {...settings}>
            {finalFilteredCards.map((card, index) => (
                <div key={index}>
                    <div className={`card ${index === Math.floor(finalFilteredCards.length / 2) ? 'middle-card' : ''}`}>
                        <div className="card-info">
                            <h2>{card.name}</h2>
                            <p>Age: {card.age}</p>
                            <p>Location: {card.location}</p>
                            <p>Sex: {card.sex}</p>
                            <p>Race: {card.race}</p>
                            <p>Hair Color: {card.haircolor}</p>
                            <p>Eye Color: {card.eyecolor}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;