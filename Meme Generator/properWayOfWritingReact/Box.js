import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div                      //here we already accept what we have in the App.js, making it smooth and easy to understand
            style={styles} 
            className="box"
            onClick={props.toggle}
        >
        </div>
    )
}
