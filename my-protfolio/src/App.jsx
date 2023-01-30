import styles from "./style";
import './App.css';

import { Navbar, Hero, Project, Skills, Education, Code } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden relative">
    <div className={`${styles.paddingX}`}>
      <div className={`${styles.flexStart}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.paddingX}`}>
      <Hero/>
      <Skills/>
      <Project/>
      <Education/>
      <Code />
    </div>

  </div>
)

export default App
