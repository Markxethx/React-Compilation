import React from 'react';
import { info } from '../constants';
import { triangle } from '../assets';
export const Code = () => {
  return (
    <section className='px-16 flex flex-col md:flex-row mb-10'>
      <div className='px-2 relative w-[669px] h-[760px]'>
        <div className='absolute z-0 top-0'>
                <img src={triangle} className='max-w-[668px] max-h-[760px] z-0' alt="triangle" />
        </div>
        <div className='z-100 flex flex-col items-start justify-center w-full h-full'>
            <div className='relative w-[390px] h-[130px] bg-card-gradient flex items-center justify-center flex-start flex-col mb-2'>
                <h2 className='text-[32px] font-bold ml-5 text-white'>Get in Touch</h2>
                <p className='dim-light text-lg ml-5'>Let's start a conversation</p>
            </div>
            <div className='ml-10 relative flex flex-col'>
                {info.map((items) => (
                  <div key={items.id} className="w-[344px] h-[67px] my-2 flex flex-row items-center bg-card-gradient">
                      <img src={items.icon} alt="logo" className='mr-16' />
                      <h2><a href={items.links}>{items.content}</a></h2>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}
