import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = ({ cards }) => {
    const slicedCards = cards.slice(0, 10);

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
            {slicedCards.map((card, index) => (
                <div key={index}>
                    <div className={`card ${index === Math.floor(cards.length / 2) ? 'middle-card' : ''}`}>
                        {/* <img src={card.imageUrl} alt={card.name} /> */}
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