import React from "react"
import boxes from "./boxes"

export default function App() {
    const [square, setSquare] = React.useState(boxes)
    
    const squareElements = square.map(item => (
        <div className="box key={square.id}"></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
