import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Card(props) {
    
    return (
        <>
            <div className="card">
                <img alt="location"
                    src={`${props.imageUrl}`} 
                    className="card--image" 
                />
                <div className="card--stats">
                    <span><FaMapMarkerAlt style={{color:"rgb(250, 81, 109)"}}/>&nbsp;{props.location} • <a href={`${props.googleMapsUrl}`}>View on Google Maps</a></span>
                    <h2 className="card--title">{props.title}</h2>
                    <span className="card--date">{props.startDate} - {props.endDate}</span>
                    <p>
                    <span className="card--desc">{props.description}</span>
                    </p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}