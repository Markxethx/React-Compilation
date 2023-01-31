import React from 'react';
import { useState } from 'react';
import styles from "../style";
import { logo, close, menu, mode, resume, menu1, x2 } from "../assets";
import { navLinks } from '../constants';
const Navbar = ({onclick, darkMode}) => {

  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  function setReverse () {
    setToggle(prev => (!prev));
    setActive(nav.title);
  }

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Mark-John-Saspa_Front_End_Develper.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Mark-John-Saspa_Front_End_Develper.pdf';
            alink.click();
        })
    })
  }

  return (
    <nav className={`w-full h-[90px] font-poppins ${styles.flexBetween} ${styles.paddingX} px-10 overflow-auto`}>
      <div className="flex items-center">
        <img src={logo} alt="logo" className='w-[32px] h-[32px] mr-1' />
        <h1 className={`${styles.navbar} text-gradient`}>The Bl</h1><span className={`${styles.navbar} text-natural ${!darkMode ? " text-white" : " text-gray-600"} `}>ank.eth</span>
      </div>

        <ul className="hidden smd:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins hover-navbar font-normal cursor-pointer text-[5px] ss:text-[16px] ${
                active === nav.title ? "text-gradient" : "text-natural"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} ${!darkMode ? " text-white" : " text-gray-600"}` }
              onClick={() => setActive(nav.title)}
            >

              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      
        <div className={`${styles.flexCenter} cursor-pointer hidden smd:flex`}>
          <img src={mode} onClick={onclick} alt="Dark mode" className='mr-4' />
          <img src={resume} onClick={onButtonClick} alt="Resume" />
        </div>
        
        <div className='smd:hidden flex flex-1 justify-end items-center'>
            {!darkMode && <img
              src={`${!toggle ? menu : close}`}
              alt="menu"
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)} /> }

            {darkMode && <img
              src={`${!toggle ? menu1 : x2}`}
              alt="menu"
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)} /> } 


        </div>

        <div className={`${!toggle ? "hidden" : "absolute"} ml-[-40px] sm:ml-[-110px] smd:hidden z-10 flex-col top-[90px] flex h-screen w-full ${darkMode ? "bg-white" : "bg-primary"}`}>
 
              <div className={`flex w-full justify-center side-bar items-center`}>
                <ul className={`flex-col mt-[120px] text-center ease-in duration-300`}>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal mb-10 cursor-pointer text-[20px] ${
                    "text-gradient"
                      }`}
                      onClick={setReverse}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.flexCenter} cursor-pointer flex`}>
                <img src={mode} onClick={onclick} alt="Dark mode" className='mr-4' />
                <img src={resume} onClick={onButtonClick} alt="Resume" />
              </div>

        </div>
    </nav>
  )
}

export default Navbar;