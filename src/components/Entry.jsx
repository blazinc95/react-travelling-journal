import React from 'react'

import pin from "../assets/pin.png"
import fuji from "../assets/fuji.png"

const Entry = (props) => {
  return (
    <div className="entry">
        <img src={props.imageUrl} alt="" className="entry--photo" />

        <div className="data">
        <div className="entry--location">
            <img src={pin} alt="pin logo" className="entry--pin" />
            <span className="entry--place">{props.location} </span>
            <a className="googlemaps" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <span className="dates">
                <b>{props.startDate} - {props.endDate}</b>
        </span>
            <p className="description">
            {props.description}
            </p>

        </div>
    </div>
  )
}

export default Entry