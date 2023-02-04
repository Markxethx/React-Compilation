import React from 'react';
import styles from '../style';
import { quickoverview } from '../assets';
import { title } from '../constants';
const Education = ({darkMode}) => {
  return (
    <section id='education' className='flex flex-col lg:px-20 smd:px-10 px-8 mt-10 md:mt-0 md:mb-10 mb-10'>
        <div id='projects' className={`${styles.flexBetween} flex flex-col justify-center lg:justify-between lg:flex-row`}>
            
            <div className='flex flex-col'>
                {title.map((item) => (
                        <div key={item.id} className='flex flex-row mb-8 w-[438px] exp rounded-lg justify-around item-center p-5 exp'>
                            <img src={item.icon} className="w-auto h-auto" alt="Logo" />
                            <div className='block'>
                                <h2 className={`${!darkMode ? "text-white" : "text-gray-900"} leading-7 font-bold text-[18px]`}>{item.title}</h2>
                                <p className={`${!darkMode ? "dim-light" : "text-gray-400"} font-semibold text-base`}>{item.content}</p>
               
                            </div>
                        </div>
                ))}
            </div>
            
            
            <img src={ quickoverview } className="mt-5 smd:mt-20 md:mt-20 pr-10 xlg:pr-14 w-auto xlg:max-w-[805px]" alt="Image Logo" />
            

        </div>


    </section>
  )
}

export default Education