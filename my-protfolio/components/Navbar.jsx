import React from 'react';
import { useState } from 'react';
import styles from "../style";
import { logo } from "../assets";
import { navLinks } from '../constants';
const Navbar = () => {

  const [active, setActive] = useState("skills");
  return (
    <nav className={`w-full font-poppins ${styles.flexCenter}`}>
      <div className="flex flex-1 justify-center items-center">
        <img src={logo} alt="logo" className='w-[32px] h-[32px] m-2' />
        <h1 className={`${styles.navbar} text-gradient`}>The Bl</h1><span className={`${styles.navbar} text-natural mb-[3px]`}>ank.eth</span>
      </div>

      <ul className={`${styles.flexCenter} flex-1`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-blue-900" : "text-blue-200"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a className="underline" href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Navbar;