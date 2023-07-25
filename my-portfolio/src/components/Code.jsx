import React from 'react';
import { info } from '../constants';
import { triangle } from '../assets';
import Form from './Form';
export const Code = ( {darkMode}) => {
  return (
    <section id='contacts' className='flex flex-col md:flex-row justify-around items-center mb-10 mt-10'>
      <div className='px-2 relative md:w-[669px] w-[300px] md:h-[760px] mb-[120px] lg:mb-10'>
        <div className='absolute z-0 top-0'>
                <img src={triangle} className='w-auto z-0' alt="triangle" />
        </div>
        <div className='z-100 flex flex-col items-start justify-center w-full h-full'>
            <div className='relative md:w-[350px] w-[290px] h-[60px] sm:h-[100px] sm:w-[320px] md:h-[130px] py-1 px-10 bg-card-gradient flex items-center justify-center flex-start flex-col mb-2'>
                <h2 className='md:text-[32px] text-[18px] font-bold ml-5 text-white'>Get in Touch</h2>
                <p className='dim-light sm:text-lg text-[12px] ml-5'>Let's start a conversation <i class="fa-solid fa-hand-point-down"></i></p>
            </div>
            <div className='sm:ml-10 ml-5 relative flex flex-col'>
                {info.map((items) => (
                  <div key={items.id} className="pr-5 my-2 h-[40px] smd:w-[384px] smd:h-[67px] sm:h-[32px] flex flex-row items-center bg-card-gradient">
                      <img src={items.icon} alt="logo" className='mr-8 ml-10 w-[18px] smd:w-[42px]' />
                      <h2 className='smd:text-[18px] sm:text-[16px] text-[12px] leading-7 text-white font-normal contacts'><a href={items.links}>{items.content}</a></h2>
                  </div>
                ))}
            </div>
        </div>
      </div>

      <Form darkmode={darkMode} />

    </section>
  )
}
