import React from "react";

export default function Card(props) {
console.log(props.item.coverImg)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }



    
    return (
        <div className="card">
             {badgeText && <div className="cardbadge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} alt="logo" className="cardimage" />
            <div className="cardstats">
            <img src={`../images/${props.item.starImg}`} alt="star" className="star" />

                <span>{props.item.stats.rating}</span>
                <span className="colorfor6">({props.item.stats.reviewCount} reviews) • </span>
                <span className="colorforcountry">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><strong>From ${props.item.price}</strong></p>
            
        </div>
    );
}
