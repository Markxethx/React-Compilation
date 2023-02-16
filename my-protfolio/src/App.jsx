import styles from "./style";
import './App.css';
import { useState, useEffect } from "react";

import { Navbar, Hero, Project, Skills, Education, Code, Loading } from "./components";

const App = () => {
  const [changeBackGroundColor, setChangeBackGroundColor] = useState(false);
  const [loadingIntro, setLoadingIntro] = useState(true)
  function loading() {
    setLoadingIntro(false)
  }
  
  useEffect( () => {
    setTimeout(loading, 3000)
  }, [])

  return (
  <>{ loadingIntro ? <Loading/> : <div className={`${changeBackGroundColor ? "bg-gray-50" : "bg-primary"} w-full overflow-hidden relative`}>
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

</div>}
  </>
  
)};

export default App
