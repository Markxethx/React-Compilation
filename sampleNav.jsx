"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [Open, setOpen] = useState(false);
  const toggleMenu = () =>{
    setOpen(!Open)
  }
  const visible = Open ? '':'hidden';
  const hamburger = Open ? '/xsvg.svg':'/hamburger-menu.svg';
  console.log(Open,visible)
  return (
    <>
      <div className={`overlay ${visible} z-10`} onClick={toggleMenu}>
        <div className='flex justify-end'>
          <Image src='/xsvg.svg' className='block sm:hidden m-4 sticky' width={18} height={18} alt='hamburger' onClick={toggleMenu}/>
        </div>
      </div>
      <header className='bg-white sticky top-0 z-10'>
        <nav className='flex justify-between items-center p-3 md:px-10 xl:w-[95rem] m-auto xl:px-16 xl:py-3 relative'>
          <Link href='/'>
            <Image src='/logo.png' width={100} height={100} alt='Excelcart logo'/>
          </Link>
          <div className={`${visible} sm:block sm:static absolute left-[30%] top-[120%] sm:top-0 sm:p-0 sm:bg-transparent bg-[#44e7c4] p-16 rounded-xl sm:min-h-fit`}>
            <ul className={`sm:flex gap-[4vw] items-center`}>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold ' href='/'>Home</Link>
              </li>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold' href='/'>Buyer</Link>
              </li>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold' href='/'>Seller</Link>
              </li>
              <li className='py-5'>
                <Link className='hover:text-gray-500 font-bold' href='/'>Contact</Link>
              </li>
            </ul>
          </div>
          <Image src={hamburger} className='block sm:hidden w-6' width={20} height={20} alt='hamburger' onClick={toggleMenu} />
          <button className='bg-[#6ec0b8] text-white rounded-full font-semibold hover:bg-[#00AB9B] px-5 pb-2 pt-1 text-[1.5rem] hidden sm:block'>Get Started</button>
        </nav>
      </header>
    </>
  )
}

export default Header
