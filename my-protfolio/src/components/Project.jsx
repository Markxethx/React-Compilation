import React from 'react';
import styles from "../style";
import { projects, business } from "../assets";
import Items from './Items';

const Project = ({darkMode}) => {
  return (
    <section className='flex flex-col smd:px-10 px-0 mt-10 md:mt-0 md:mb-10 mb-5'>
        <div id='projects' className={`${styles.flexBetween} flex-col smd:flex-row-reverse `}>
            <img src={business} className="mr-0 hidden smd:flex lg:mr-28 w-[418px] h-[418px]" alt="Image Logo" />
            
            <div className='w-full md:w-[660px] text-natural text-start px-5 smd:px-10'>

                <div className='flex flex-row items-center'>
                    <h2 className={`mb-5 font-poppins leading-[70px] font-semibold non-italic text-[64px] text-gradient`}>Popular Projects</h2>
                    <img src={projects} className='w-[120px] h-[120px]' alt="tools logo" />
                </div>
                    <p className={`${styles.text} ${!darkMode ? "dim-light" : "text-gray-600"}`}>I am at my highest point when
                     i am able to apply all the skills 
                     and knowledge that i have to real world 
                     application. Learning and contributing to 
                     meaningful projects. </p>

            </div>
        </div>

        <div className='flex flex-wrap w-full'>
            <Items />
        </div>
    </section>
  )
}

export default Project;