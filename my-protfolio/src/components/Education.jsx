import React from 'react';
import styles from '../style';
import { quickoverview } from '../assets';
const Education = () => {
  return (
    <section className='flex flex-col smd:px-10 md:px-0 px-8 mt-10 md:mt-0 md:mb-10 mb-10'>
        <div id='projects' className={`${styles.flexBetween} flex flex-col lg:flex-row`}>

            <div>
                
            </div>
            
            <img src={ quickoverview } className="mt-5 smd:mt-20 md:mt-20" alt="Image Logo" />
            

        </div>


    </section>
  )
}

export default Education