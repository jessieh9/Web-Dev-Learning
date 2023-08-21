import React from "react";
// import x from "../../public/images"
import pin from "../images/location-logo.svg";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={`../images/${props.image}`} alt="location" />
            <div className="card--info">
                <div className="card--location">
                    <img className="card--pin" src={pin} alt="location-pin" />
                    <h2 className="card--country">{props.country}</h2>
                    <a href={props.map}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.location}</h1>
                <p className="card--date">{props.duration}</p>
                <p className="card--description">{props.description}.</p>
            </div>
        </div>
    );
};