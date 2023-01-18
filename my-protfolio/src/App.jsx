import styles from "./style";
import './App.css';
import Navbar from './components/Navbar';
const App = () => (
  <div className="bg-primary w-full m-0 p-0 overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
)

export default App
