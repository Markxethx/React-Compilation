import styles from "./style";
import './App.css';
import { useState } from "react";

import { Navbar, Hero, Project, Skills, Education, Code } from "./components";

const App = () => 
{
  const [changeBackGroundColor, setChangeBackGroundColor] = useState(false);

  return (
  <div className={`${changeBackGroundColor ? "bg-gray-50" : "bg-primary"} w-full overflow-hidden relative`}>
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.flexStart}`}>
        <Navbar onclick={() => setChangeBackGroundColor(!changeBackGroundColor)}
        darkMode={changeBackGroundColor}/>
      </div>
    </div>

    <div className={`${styles.paddingX}`}>
      <Hero darkMode={changeBackGroundColor}/>
      <Skills darkMode={changeBackGroundColor}/>
      <Project darkMode={changeBackGroundColor}/>
      <Education darkMode={changeBackGroundColor}/>
      <Code darkMode={changeBackGroundColor}/>
    </div>

  </div>
)};

export default App
