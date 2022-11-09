import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    const [answer, setAnswer] = React.useState(true)
    const just = answer ? "Yes" : "No"
    function changeMe() {
        setAnswer(prevAns => !prevAns)
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMe} className="state--value">
                <h1>{just}</h1> //we can recall the function by giving new name
            </div>
        </div>
    )
}

import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    const [answer, setAnswer] = React.useState(true)
    function changeMe() {
        setAnswer(prevAns => !prevAns)
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMe} className="state--value">
                <h1>{answer ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
