import React from "react";
import image from "../images/mt-fuji.webp";
import pin from "../images/location-logo.svg";

export default function Card() {
    return (
        <div className="card">
            <img className="card--img" src={image} alt="mt-fuji" />
            <div className="card--info">
                <div className="card--location">
                    <img className="card--pin" src={pin} alt="location-pin" />
                    <h2 className="card--country">JAPAN</h2>
                    <a href="www.google.com">View on Google Maps</a>
                </div>
                <h1 className="card--title">Mount Fuji</h1>
                <p className="card--date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    );
};