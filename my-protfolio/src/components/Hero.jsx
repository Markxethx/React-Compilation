import React from 'react';
import styles from '../style';
import { vectors, Me } from "../assets";

const Hero = () => (
  <section className={`text-white w-full flex-col md:flex-row ${styles.flexBetween} ${styles.paddingX}`}>

    <div>
      <div className='relative'>
        <div className='absolute left-0'>
          <img src={vectors} alt="vector" className='w-[818px] h-[438px]' />
        </div>

        <div className='lg:w-[818px] md:w-[418px] w-full h-auto smd:h-[438px]'>
          <h2 className={`${styles.title} lg:text-[64px] md:text-[40px]`}>Passionate</h2>
          <h1 className={`${styles.title} lg:text-[64px] md:text-[40px] text-brown`}>Front End Developer</h1>
          <h2 className={`${styles.title} lg:text-[64px] md:text-[40px]`}>From Philippines</h2>
          <h3 className='font-poppins non-italic font-bold  text-[18px]'>Hi i am Mark John Factor Saspa</h3>
          <p className='font-poppins non-italic font-bold  text-[18px] dim-light'>A freelance problem solver and critical thinker. Knowledge of </p>
          <p className='font-poppins non-italic font-bold  text-[18px] dim-light'>Engineering and Mathematics. With our world of continuous growth </p>
          <p className='font-poppins non-italic font-bold  text-[18px] dim-light'>and understanding i therefore love exploring new things and </p>
          <p className='font-poppins non-italic font-bold  text-[18px] dim-light'>technologies.</p>
        </div>
      </div>
    </div>

    <div className='smd:w-[694px] sm:w-[500px] w-[350px]'>
      <img src={Me} alt="Myself" />
    </div>

  </section>
)




export default Hero