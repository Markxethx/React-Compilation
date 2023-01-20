import React from 'react';
import { useState } from 'react';
import styles from "../style";
import { logo, close, menu } from "../assets";
import { navLinks, modes } from '../constants';
const Navbar = () => {

  const [active, setActive] = useState("Skills");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full h-[90px] font-poppins ${styles.flexBetween} overflow-auto`}>
      <div className="flex items-center">
        <img src={logo} alt="logo" className='w-[32px] h-[32px] m-2' />
        <h1 className={`${styles.navbar} text-gradient`}>The Bl</h1><span className={`${styles.navbar} text-natural mb-[3px]`}>ank.eth</span>
      </div>

        <ul className="hidden smd:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[5px] ss:text-[16px] ${
                active === nav.title ? "text-gradient" : "text-natural"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >

              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      
        <div className={`${styles.flexCenter} cursor-pointer hidden smd:flex`}>
          {modes.map((mode) => (
            <img key={mode.id} className="mr-4" src={mode.icon} />
          ))}
        </div>
        
        <div className='smd:hidden flex flex-1 justify-end items-center'>
            <img
              src={`${!toggle ? menu : close}`}
              alt="menu"
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)} />
        </div>

        <div className={`${!toggle ? "hidden" : "absolute"} z-10 flex h-screen w-screen bg-blue-900`}>
            <div className='flex h-full w-full'>

              <div className='flex flex-1 justify-end items-center m-[20px]'>
                <img
                  src={`${!toggle ? menu : close}`}
                  alt="menu"
                  className='w-[28px] h-[28px] object-contain'
                  onClick={() => setToggle(!toggle)} />
              </div>

              <ul className={`flex-col absolute top-20`}>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      active === nav.title ? "text-red-900" : "text-blue-900"
                    } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                    onClick={() => setActive(nav.title)}
                  >

                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
