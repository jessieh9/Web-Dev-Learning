import React from "react";
import world from "../images/globe.png";

export default function Navbar() {
    return (
        <div className="nav">
            <img className="nav--logo" src={world} alt="world-logo" />
            <h1 className="nav--title">my travel journal.</h1>
        </div>
    );
};