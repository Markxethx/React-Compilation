import React from 'react';
import styles from "../style";
import { logo } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <nav className={`bg-sky-500 w-full font-poppins ${styles.flexCenter}`}>
      <div className="flex flex-1">
        <img src={logo} alt="logo" className='w-[32px] h-[32px]' />
        <h1 className={`text-brown ${styles.navbar}`}>The Bl<span className='text-white'>ank.eth</span></h1>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;