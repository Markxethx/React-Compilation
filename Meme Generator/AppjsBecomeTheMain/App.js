import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = [];
            for (let i = 0; i < prevSquares.length; i ++) { //this more looks an imperative
                const currentSquare = prevSquares[i]
                if (currentSquare.id === id) {
                    const updatedSquares = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquares)
                }   else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}
