import React from 'react';
import { useState } from 'react';
import styles from "../style";
import { logo, close, menu } from "../assets";
import { navLinks, modes } from '../constants';
const Navbar = () => {

  const [active, setActive] = useState("Skills");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`w-full h-[90px] font-poppins ${styles.flexBetween} ${styles.paddingX} px-10 overflow-auto`}>
      <div className="flex items-center">
        <img src={logo} alt="logo" className='w-[32px] h-[32px]' />
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

        <div className={`${!toggle ? "hidden" : "fixed"} smd:hidden z-10 top-[90px] flex h-screen w-full bg-primary  `}>

              <div className='flex w-full justify-center side-bar items-center'>
                <ul className={`flex-col mt-[-100px] text-center ease-in duration-300`}>
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-normal mb-10 cursor-pointer text-[20px] ${
                        active === nav.title ? "text-gradient" : "text-natural"
                      }`}
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
