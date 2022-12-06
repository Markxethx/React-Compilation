import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)
    function toggleDarkMode() {
        setDarkMode(darkmode => !darkmode)
    }
    console.log(darkMode)
    return (
        <div className="container">
            <Navbar 
            toggleDarkMode={toggleDarkMode} // we passed the react use state above
            darkMode={darkMode} />
            <Main 
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
             />
        </div>
    )
}
