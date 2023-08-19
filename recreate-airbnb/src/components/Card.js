import React from "react"
import star from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.image} alt="person" />
            <div className="card--rating">
                <img src={star} alt="red star" />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.country}</span>
            </div>
            <p className="card--text-title">{props.title}</p>
            <p className="card--text"><strong>From ${props.price}</strong> / person</p>
        </div>
    );
};