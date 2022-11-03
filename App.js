import profile2 from './profile2.png';
import './App.css';

function App() {
  const date = new Date()
  const hour = date.getHours()
  let timeToday;

  if (hour < 12) {
    timeToday = "Morning";
  } else if (hour >= 12 && hour <= 17) {
    timeToday = "Afternoon";
  } else {
    timeToday = "Evening";
  }

  return (
    <div className='containerApp'>
    <div className="App">
      <header className='header'>
        <img src={profile2} height="200px" width="auto " alt="Profile Pic" />
      </header>
      <body className='body'>
        <div className='info'>
          <h1>Mark John</h1>
          <h2>Front End</h2>
          <h3>pickygrinder.vercel.app</h3>
        </div>
        <div className='connect'>
          <button><i class="fa-solid fa-envelope"></i><a href='https://nekocalc.com/px-to-rem-converter'> Email </a></button>
          <button><i class="fa-brands fa-linkedin"></i> Linkedln</button>
        </div>
        <div className='about'>
          <h1>About</h1>
          <p>Good {timeToday}! I was just a random pop up. A reincarnation with a little amount of time, trying my best to become a better person. Looking forward to help other people. Hey, just smile and know that everything will be okay &#128513;</p>
          <h1>Current Thought</h1>
          <p>Don't waste time. Learn programming. HTML, CSS and JavaScript. Thank me Later. <br /></p>
          <strong className='dm'>Dm for RoadMap &#128522;</strong>
        </div>
      </body>
      <footer className='footer'>
        <div className='icon'><i class="fa-brands fa-square-twitter"></i></div>
        <div className='icon'><i class="fa-brands fa-square-facebook"></i></div>
        <div className='icon'><i class="fa-brands fa-square-instagram"></i></div>
        <div className='icon'><i class="fa-brands fa-square-github"></i></div>
      </footer>
    </div>
    </div>
  );
}

export default App;


/* add 
import React from "react"

export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
} */
