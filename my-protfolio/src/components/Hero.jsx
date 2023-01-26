import React from 'react';
import styles from '../style';
import { vectors, Me } from "../assets";

const Hero = () => (
  <section className={`text-white w-full h-auto flex-col md:flex-row px-10 relative ${styles.flexBetween} ${styles.paddingX}`}>

    <div>
      <div className='relative'>
        <div className='absolute left-0'>
          <img src={vectors} alt="vector" className='w-[818px] h-[438px]' />
        </div>

        <div className='absolute circle-gradient-left '>

        </div>

        <div className='w-full h-auto'>
          <h2 className={`${styles.title} ${styles.paddingText}`}>Passionate</h2>
          <h1 className={`${styles.title} ${styles.paddingText} md:text-[64px] font-bold text-brown`}>Front End Developer</h1>
          <h2 className={`${styles.title} ${styles.paddingText} mb-15`}>From Philippines</h2>
          <h3 className={`font-poppins non-italic font-bold  text-[18px] mb-5 ${styles.paddingText}`}>Hi i am Mark John Factor Saspa</h3>
          <p className={`${styles.text}`}>A freelance problem solver and critical thinker. Knowledge of </p>
          <p className={`${styles.text}`}>Engineering and Mathematics. With our world of continuous growth </p>
          <p className={`${styles.text}`}>and understanding i therefore love exploring new things and </p>
          <p className={`${styles.text} mb-10`}>technologies.</p>
        </div>
      </div>
    </div>

    <div className='smd:w-[694px] relative sm:w-[500px]'>
      <div className=' w-full h-full'>
        <div className="absolute top-0 left-[-50px] wheel z-0">
          <div className="cabin z-0"></div>
          <div className="cabin z-0"></div>
          <div className="cabin z-0"></div>
          <div className="cabin z-0"></div>
          <div className="cabin z-0"></div>
          <div className="cabin z-0"></div>
        </div>
      </div>
      <img src={Me} className="z-100 relative mr-10" alt="Myself" />

    </div>

  </section>
)




export default Hero