import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import movie0 from "../images/movie0.jpg";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.jpg";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";

const images = [movie0, movie1, movie2, movie3, movie4];

const slideShowStyle = {
    minHeight: "20vh",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

function Demo1(props) {
    const [currentIndexManual, setCurrentIndexManual] = useState(0);
    const [currentIndexAutomatic, setCurrentIndexAutomatic] = useState(0);

    const handleManualPrevious = () => {
        setCurrentIndexManual(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleManualNext = () => {
        setCurrentIndexManual((prevIndex) => (prevIndex + 1) % images.length);
    };

    useEffect(() => {
        const automaticInterval = setInterval(() => {
            setCurrentIndexAutomatic(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 2000); // Adjust the interval duration as needed

        return () => clearInterval(automaticInterval);
    }, []);

    return (
        <div style={slideShowStyle}>
            <h1>DEMO 1: Slideshows</h1>
            <h2>Manual Slideshow</h2>
            <img
                style={{ height: "250px" }}
                src={images[currentIndexManual]}
                alt="slideshow"
            />
            <div>
                <button onClick={handleManualPrevious}>Previous</button>
                <button onClick={handleManualNext}>Next</button>
            </div>

            <h2>Automatic Slideshow</h2>
            <img
                style={{ height: "250px" }}
                src={images[currentIndexAutomatic]}
                alt="slideshow"
            />
        </div>
    );
}

Demo1.propTypes = {
    state: PropTypes.object.isRequired,
};

export default Demo1;
