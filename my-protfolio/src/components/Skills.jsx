import React from 'react';
import styles from "../style";
import { expertise } from '../constants';
import { expertiseLogo, tools } from "../assets";

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col'>
        <div className={`${styles.flexBetween} flex-col smd:flex-row px-10 mt-10 md:mt-0 md:mb-10 mb-5`}>
            <img src={expertiseLogo} className="ml-0 hidden smd:flex lg:ml-28 w-[418px] h-[418px]" alt="Image Logo" />
            
            <div className='w-full md:w-[660px] text-natural text-end'>

                <div className='flex flex-row items-center'>
                    <img src={tools} className='w-[120px] h-[120px]' alt="tools logo" />
                    <h2 className={`ml-5 mb-5 font-poppins leading-[70px] font-semibold non-italic text-[64px] text-gradient`}>Skills and Tools</h2>
                </div>
                    <p className={`${styles.text}`}>With the use of modern technologies i love 
                    to build useful application and solve modern
                    problems alongside with people i work with.
                    I use to learn and adopt new things easily 
                    especially with new environment. And with the 
                    help of my strong engineering and problem solving
                    skills i use to learn faster new languages and frameworks.</p>

            </div>
        </div>
    
        <div className={`w-full px-10`}>
            <h2 className='font-poppins leading-[70px] font-semibold non-italic text-start text-white text-[32px] '>Field of expertise</h2>
            
            <div className='flex w-full justify-between items-center flex-row flex-wrap md:px-0 sm:px-10'>
                 {expertise.map((logo) => (
                    <div className='w-[120px] my-10 flex justify-between flex-col h-auto text-center' key={logo.id}>
                        <img className='object-contain w-auto max-h-[70px] text-white' key={logo.id} src={logo.icon} alt="logos" /><br />
                        <h3 className='text-gradient text-[18px] leading-6 font-semibold'>{logo.content}</h3>
                    </div>
                 ))}
            </div>
        </div>
        
    </div>
  )
}

export default Skills