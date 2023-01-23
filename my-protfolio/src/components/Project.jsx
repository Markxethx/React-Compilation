import React from 'react';
import styles from "../style";
import { expertise } from '../constants';
import { projects, business } from "../assets";

const Project = () => {
  return (
        <div id='projects' className={`${styles.flexBetween} flex-col smd:flex-row-reverse px-10 mt-10 md:mt-0 md:mb-10 mb-5`}>
            <img src={business} className="mr-0 hidden smd:flex lg:mr-28 w-[418px] h-[418px]" alt="Image Logo" />
            
            <div className='w-full md:w-[660px] text-natural text-start'>

                <div className='flex flex-row items-center'>
                    <h2 className={`mr-5 mb-5 font-poppins leading-[70px] font-semibold non-italic text-[64px] text-gradient`}>Skills and Tools</h2>
                    <img src={projects} className='w-[120px] h-[120px]' alt="tools logo" />
                </div>
                    <p className={`${styles.text}`}>I am at my highest point when
                     i am able to apply all the skills 
                     and knowledge that i have to real world 
                     application. Learning and contributing to 
                     meaningful projects. </p>

            </div>
        </div>
  )
}

export default Project;
