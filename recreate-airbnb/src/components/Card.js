import React from "react"
import star from "../images/star.png";
// import x from "../images"

export default function Card(props) {
    const [eventDescription, setDescription] = React.useState("");
    const [twoClick, setTwoClick] = React.useState(false);

    function handleImgClick() {
        console.log("Clicked");
        setDescription(props.description);
        setTwoClick(false);
    }

    function handleDoubleCick() {
        setTwoClick(true);
    }

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText ? <div className="card--badge">{badgeText}</div> : null}
            {/* <p className="img--text">{eventDescription}</p> */}
            <img className="card--img" src={`../images/${props.coverImg}`} alt="person" />
            <div className="card--rating">
                <img src={star} alt="red star" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                {props.location === "Online" ? <span>USA</span> : <span>{props.location}</span>}
            </div>
            <div className="card--info">
                <p className="card--text-title">{props.title}</p>
                <button onClick={handleImgClick} onDoubleClick={handleDoubleCick} className="card--btn">...</button>
            </div>
            {!twoClick && <p className="card--description">{eventDescription}</p>}
            <p className="card--text"><strong>From ${props.price}</strong> / person</p>
        </div>
    );
};