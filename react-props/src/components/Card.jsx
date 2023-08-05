import React from "react";

function Card(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.name}</h2>
            <img
                src={props.image}
                alt={props.altern}
            />
            <p>{props.num}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;