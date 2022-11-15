import React from "react"

export default function Star(props) {
    return (
        <div>
        <img 
            src={`../images/${props.starIcon}`} 
            className="card--favorite"
            onClick={props.toggleFavorite}
        />
        </div>
    )
}
