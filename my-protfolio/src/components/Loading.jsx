import React from 'react'
import './Loading.css'
const Loading= () => {
  return (
    <section className='bg-primary h-screen mother-circle  w-full flex items-center justify-center'>
      <div className='loading relative h-[224px] w-[224px]'>
          <div className='absolute circle h-[64px] w-[64px] bg-red-500 z-[100]'></div>
          <div className='absolute circle h-[84px] w-[84px] bg-red-700 z-[90]'></div>
          <div className='absolute circle h-[104px] w-[104px] bg-red-900 z-[80]'></div>
          <div className='absolute circle h-[124px] w-[124px] bg-orange-300 z-[70]'></div>
          <div className='absolute circle h-[144px] w-[144px] bg-orange-400 z-[60]'></div>
          <div className='absolute circle h-[164px] w-[164px] bg-orange-500 z-[50]'></div>
          <div className='absolute circle h-[184px] w-[184px] bg-orange-600 z-[40]'></div>
          <div className='absolute circle h-[204px] w-[204px] bg-orange-700 z-[30]'></div>
          <div className='absolute circle h-[224px] w-[224px] bg-orange-900 z-[20]'></div>
      </div>
        
    </section>
    )
}

export default Loading;