import React from 'react';
import { Carousel } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Carousel >

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/JrSY9bY/banner-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-style">
                        <h1>The perfect eyesight</h1>
                        <p>Optometrist & eayes care specialist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZxGVZWJ/banner-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-style">
                        <h1>The Best eye care for you</h1>
                        <p>Optometrist & eayes care specialist</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tBn0qbT/banner-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-style">
                        <h1>Improve  you  eay health</h1>
                        <p>Optometrist & eayes care specialist</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>v
        </div>
    );
};

export default Header;