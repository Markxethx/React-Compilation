import React from 'react';
import styles from '../style';
import { vectors, Justme } from "../assets";

const Hero = () => (
  <section className={`text-white w-full h-auto flex-col md:flex-row px-10 relative pb-[500px] ${styles.flexBetween} ${styles.paddingX}`}>

    <div>
      <div className='relative'>
        <div className='absolute left-0'>
          <img src={vectors} alt="vector" className='w-[818px] h-[438px]' />
        </div>

        <div className='w-full h-auto'>
          <h2 className={`${styles.title} ${styles.paddingText}`}>Passionate</h2>
          <h1 className={`${styles.title} ${styles.paddingText} text-brown`}>Front End Developer</h1>
          <h2 className={`${styles.title} ${styles.paddingText}`}>From Philippines</h2>
          <h3 className={`font-poppins non-italic font-bold  text-[18px] ${styles.paddingText}`}>Hi i am Mark John Factor Saspa</h3>
          <p className={`${styles.text}`}>A freelance problem solver and critical thinker. Knowledge of </p>
          <p className={`${styles.text}`}>Engineering and Mathematics. With our world of continuous growth </p>
          <p className={`${styles.text}`}>and understanding i therefore love exploring new things and </p>
          <p className={`${styles.text}`}>technologies.</p>
        </div>
      </div>
    </div>

    <div className='smd:w-[694px] sm:w-[500px] w-[350px]'>
      <div className='relative'>
        <img src={Justme} className="z-20" alt="Myself" />
        <div className="absolute top-[-50px] left-[-50px] wheel z-0">
          <div className="cabin z-10"></div>
          <div className="cabin z-10"></div>
          <div className="cabin z-10"></div>
          <div className="cabin z-10"></div>
          <div className="cabin z-10"></div>
          <div className="cabin z-10"></div>
        </div>

    </div>
    </div>

  </section>
)




export default Hero
