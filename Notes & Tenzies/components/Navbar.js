import React from "react"

export default function Navbar(props) { // from props we passed the information from App.js
    return (
        //whole navigation
         <nav 
            className={props.darkMode ? "dark": ""} //we specify the class for us to know if it is in the dark mode or not
        > 
            <img 
                className="nav--logo_icon"
                src="./images/react-icon-small.png"
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
