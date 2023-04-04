import React from 'react';
import { RealLogo, Menu, Close} from '../assets';
import { navLinks } from '../constants';
import styles from '../styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({buttonColor}) {
  
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(false)
    setActive(nav.title)
    console.log("yey")
  }

  return (
    <nav className={`container main-nav mx-auto navbar w-full font-poppins ${styles.flexBetween} ${styles.paddingX} px-10 py-4 color overflow-hidden`}>
       <Link to="/"> <img src={RealLogo} alt="logo" className='w-[65px] mr-1' /></Link> 
      <ul className="sm:flex hidden items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`mr-10`}
          >
            <Link to={nav.route} className={`${nav.class??'' } text-[${buttonColor}]`} href={`#${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden block">
        <img
          src={toggle ? Close : Menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${toggle ? "absolute" : "hidden"} z-10 listItem p-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar w-full h-screen`}
        >
          <div className={`${toggle ? "absolute right-[381px]" : "hidden"} w-full h-screen bg-black-gradient`}>
            <ul className={`${toggle ? "mr-[1000px]" : "mr-[0px]"} list-none justify-center items-start flex-col`}>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                >
                <Link to={nav.route} className={`${nav.class??'' } text-[${buttonColor}]`} href={`#${nav.id}`}>{nav.title}</Link>

                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
