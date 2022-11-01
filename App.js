import profile2 from './profile2.png';
import './App.css';

function App() {
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus modi nihil sunt a vero fugit magni quod illo minima quidem vitae, ipsum, magnam deserunt perspiciatis molestias dolore cupiditate dolorem.</p>
          <h1>Interests</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero porro dolor placeat enim repudiandae natus illo rem minus voluptatibus!</p>
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
